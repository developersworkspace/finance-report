import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { Account } from '../models/account';
import { AccountBalance } from '../models/account-balance';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-home-route',
  templateUrl: './home-route.component.html',
  styleUrls: ['./home-route.component.css']
})
export class HomeRouteComponent implements OnInit {

  protected accounts: Account[] = [];

  public chart = new Chart({
    chart: {
      type: 'line'
    },
    title: {
      text: 'Accounts'
    },
    series: [],
    xAxis: {
      type: 'datetime'
    },
  });

  constructor(
    protected accountService: AccountService,
  ) {

  }

  public ngOnInit(): void {
    this.accounts = this.accountService.list();

    this.addAccountSeries();

    this.addCashSeries();

    this.addNetWorthSeries();
  }

  protected addAccountSeries(): void {
    for (const account of this.accounts) {
      this.chart.addSerie({
        data: account.getBalanceSeries(),
        name: `${account.name} Balance`,
        visible: false,
      });

      this.chart.addSerie({
        data: account.getBalanceDeltaSeries(),
        name: `${account.name} Balance Delta`,
        visible: false,
      });
    }

    for (const account of this.accounts) {
      if (!account.loan) {
        continue;
      }

      this.chart.addSerie({
        data: account.getInterestSeries(),
        name: `${account.name} Interest`,
        visible: false,
      });

      this.chart.addSerie({
        data: account.getInterestDeltaSeries(),
        name: `${account.name} Interest Delta`,
        visible: false,
      });

      this.chart.addSerie({
        data: account.getRepaymentSeries(),
        name: `${account.name} Repayment`,
        visible: false,
      });

      this.chart.addSerie({
        data: account.getRepaymentDeltaSeries(),
        name: `${account.name} Repayment Delta`,
        visible: false,
      });
    }
  }

  protected addCashSeries(): void {
    const timestamps: Date[] = this.getUniqueTimestamps();

    const data: any[] = [];

    for (const timestamp of timestamps) {
      data.push({
        x: timestamp.getTime(),
        y: this.calculateCash(timestamp),
      });
    }

    this.chart.addSerie({
      data,
      name: `Cash`,
    });

    this.chart.addSerie({
      data: this.getDelta(data),
      name: `Cash Delta`,
      visible: false,
    });
  }

  protected addNetWorthSeries(): void {
    const timestamps: Date[] = this.getUniqueTimestamps();

    const data: any[] = [];

    for (const timestamp of timestamps) {
      data.push({
        x: timestamp.getTime(),
        y: this.calculateNetWorth(timestamp),
      });
    }

    this.chart.addSerie({
      data,
      name: `Net Worth`,
    });

    this.chart.addSerie({
      data: this.getDelta(data),
      name: `Net Worth Delta`,
      visible: false,
    });
  }

  protected calculateCash(timestamp: Date): number {
    let sum = 0;
    for (const account of this.accounts) {
      if (!account.cash) {
        continue;
      }

      const balance: AccountBalance = account.balances.find((x) => x.timestamp.getTime() === timestamp.getTime());

      if (!balance) {
        continue;
      }

      sum += balance.value;
    }

    return Math.round(sum * 100) / 100;
  }

  protected calculateNetWorth(timestamp: Date): number {
    let sum = 0;
    for (const account of this.accounts) {
      const balance: AccountBalance = account.balances.find((x) => x.timestamp.getTime() === timestamp.getTime());

      if (!balance) {
        continue;
      }

      sum += balance.value;
    }

    return Math.round(sum * 100) / 100;
  }

  protected getDelta(data: { x: number, y: number }[]): {x: number, y: number}[] {
    const result: {x: number, y: number }[] = [];

    for (let index = 1; index < data.length; index++) {
      result.push({
        x: data[index].x,
        y: Math.round((data[index].y - data[index - 1].y) * 100) / 100,
      });
    }

    return result;
  }

  protected getUniqueTimestamps(): Date[] {
    const timestamps: Date[] = [];

    for (const account of this.accounts) {
      for (const balance of account.balances) {
        if (timestamps.find((x: Date) => x.getTime() === balance.timestamp.getTime())) {
          continue;
        }

        timestamps.push(balance.timestamp);
      }
    }

    timestamps.sort((a: Date, b: Date) => {
      return a.getTime() - b.getTime();
    });

    return timestamps;
  }

}
