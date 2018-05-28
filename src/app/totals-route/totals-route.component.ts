import { Component } from '@angular/core';
import { TotalsEntry } from '../models/totals-entry';
import { Chart } from 'angular-highcharts';
import { TotalsViewEntry } from '../models/totals-view-entry';
import { Totals } from '../models/totals';

@Component({
  selector: 'app-totals-route',
  templateUrl: './totals-route.component.html',
  styleUrls: ['./totals-route.component.css']
})
export class TotalsRouteComponent {

  public totals: Totals = null;

  public totalsEntries: TotalsEntry[] = null;

  public totalsChart = new Chart({
    chart: {
      type: 'line'
    },
    title: {
      text: 'Totals'
    },
    series: [],
    xAxis: {
      type: 'datetime'
    },
  });

  constructor() {
    this.totalsEntries = [
      new TotalsEntry(12015.37, -1529.03, 16100.00, 122852.87, new Date(2018, 0, 31)),
      new TotalsEntry(9124.55, -1907.91, 16100.00, 134115.78, new Date(2018, 1, 31)),
      new TotalsEntry(14088.66, -7060.58, 16100.00, 137895.92, new Date(2018, 2, 31)),
      new TotalsEntry(11938.97, -3837.2, 20300.00, 78542.55, new Date(2018, 3, 31)),
      new TotalsEntry(12602.12, -893, 20300.00, 44835.35, new Date(2018, 4, 31)),
    ];

    this.totals = new Totals(this.totalsEntries);

    const totalsViewEntries: TotalsViewEntry[] = this.totals.toViewEntries();

    this.setChequeBalanceChart(totalsViewEntries);
    this.setCreditBalanceChart(totalsViewEntries);
    this.setHomeLoanBalanceChart(totalsViewEntries);
    this.setSavingsBalanceChart(totalsViewEntries);
    this.setTotalsBalanceChart(totalsViewEntries);
    this.setTotalsBalanceDeltaChart(totalsViewEntries);
  }


  protected setChequeBalanceChart(totalsViewEntries: TotalsViewEntry[]): void {
    this.totalsChart.addSerie({
      data: totalsViewEntries.map((totalsViewEntry: TotalsViewEntry) => {
        return {
          x: totalsViewEntry.timestamp.getTime(),
          y: totalsViewEntry.chequeBalance,
        };
      }),
      name: 'Cheque Balance',
    });
  }

  protected setCreditBalanceChart(totalsViewEntries: TotalsViewEntry[]): void {
    this.totalsChart.addSerie({
      data: totalsViewEntries.map((totalsViewEntry: TotalsViewEntry) => {
        return {
          x: totalsViewEntry.timestamp.getTime(),
          y: totalsViewEntry.creditBalance,
        };
      }),
      name: 'Credit Balance',
    });
  }

  protected setHomeLoanBalanceChart(totalsViewEntries: TotalsViewEntry[]): void {
    this.totalsChart.addSerie({
      data: totalsViewEntries.map((totalsViewEntry: TotalsViewEntry) => {
        return {
          x: totalsViewEntry.timestamp.getTime(),
          y: totalsViewEntry.homeLoanBalance,
        };
      }),
      name: 'Home Loan Balance',
    });
  }

  protected setSavingsBalanceChart(totalsViewEntries: TotalsViewEntry[]): void {
    this.totalsChart.addSerie({
      data: totalsViewEntries.map((totalsViewEntry: TotalsViewEntry) => {
        return {
          x: totalsViewEntry.timestamp.getTime(),
          y: totalsViewEntry.savingsBalance,
        };
      }),
      name: 'Savings Balance',
    });
  }

  protected setTotalsBalanceChart(totalsViewEntries: TotalsViewEntry[]): void {
    this.totalsChart.addSerie({
      data: totalsViewEntries.map((totalsViewEntry: TotalsViewEntry) => {
        return {
          x: totalsViewEntry.timestamp.getTime(),
          y: totalsViewEntry.total,
        };
      }),
      name: 'Totals Balance',
    });
  }

  protected setTotalsBalanceDeltaChart(totalsViewEntries: TotalsViewEntry[]): void {
    this.totalsChart.addSerie({
      data: totalsViewEntries.map((totalsViewEntry: TotalsViewEntry) => {
        return {
          x: totalsViewEntry.timestamp.getTime(),
          y: totalsViewEntry.totalDelta,
        };
      }),
      name: 'Totals Balance Delta',
    });
  }


}
