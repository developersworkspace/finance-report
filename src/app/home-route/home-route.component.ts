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
        data: account.balances.map((balance: AccountBalance) => {
          return {
            x: balance.timestamp.getTime(),
            y: Math.round(balance.value * 100) / 100,
          };
        }),
        name: `${account.name} Balance`,
      });
    }

    for (const account of this.accounts) {
      if (!account.loan) {
        continue;
      }

      this.chart.addSerie({
        data: account.balances.map((balance: AccountBalance) => {
          return {
            x: balance.timestamp.getTime(),
            y: Math.round(balance.interest * 100) / 100,
          };
        }),
        name: `${account.name} Interest`,
      });

      this.chart.addSerie({
        data: account.balances.map((balance: AccountBalance) => {
          return {
            x: balance.timestamp.getTime(),
            y: Math.round(balance.repayment * 100) / 100,
          };
        }),
        name: `${account.name} Repayment`,
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
