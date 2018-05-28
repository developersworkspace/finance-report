import { Component } from '@angular/core';
import { TotalsEntry } from '../models/totals-entry';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-totals-route',
  templateUrl: './totals-route.component.html',
  styleUrls: ['./totals-route.component.css']
})
export class TotalsRouteComponent {

  public totalsEntries: TotalsEntry[] = null;

  public chequeBalanceChart = new Chart({
    chart: {
      type: 'line'
    },
    title: {
      text: 'Cheque Balance'
    },
    series: [],
    xAxis: {
      type: 'datetime'
    },
  });

  public creditBalanceChart = new Chart({
    chart: {
      type: 'line'
    },
    title: {
      text: 'Credit Balance'
    },
    series: [],
    xAxis: {
      type: 'datetime'
    },
  });

  public homeLoanBalanceChart = new Chart({
    chart: {
      type: 'line'
    },
    title: {
      text: 'Home Loan Balance'
    },
    series: [],
    xAxis: {
      type: 'datetime'
    },
  });

  public savingsBalanceChart = new Chart({
    chart: {
      type: 'line'
    },
    title: {
      text: 'Savings Balance'
    },
    series: [],
    xAxis: {
      type: 'datetime'
    },
  });

  public totalsBalanceChart = new Chart({
    chart: {
      type: 'line'
    },
    title: {
      text: 'Totals Balance'
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

    this.setChequeBalanceChart(this.totalsEntries);
    this.setCreditBalanceChart(this.totalsEntries);
    this.setHomeLoanBalanceChart(this.totalsEntries);
    this.setSavingsBalanceChart(this.totalsEntries);
    this.setTotalsBalanceChart(this.totalsEntries);
  }


  protected setChequeBalanceChart(totalsEntries: TotalsEntry[]): void {
    this.chequeBalanceChart.addSerie({
      data: totalsEntries.map((totalsEntry: TotalsEntry) => {
        return {
          x: totalsEntry.timestamp.getTime(),
          y: totalsEntry.chequeBalance,
        };
      }),
      name: 'Cheque Balance',
    });
  }

  protected setCreditBalanceChart(totalsEntries: TotalsEntry[]): void {
    this.creditBalanceChart.addSerie({
      data: totalsEntries.map((totalsEntry: TotalsEntry) => {
        return {
          x: totalsEntry.timestamp.getTime(),
          y: totalsEntry.creditBalance,
        };
      }),
      name: 'Credit Balance',
    });
  }

  protected setHomeLoanBalanceChart(totalsEntries: TotalsEntry[]): void {
    this.homeLoanBalanceChart.addSerie({
      data: totalsEntries.map((totalsEntry: TotalsEntry) => {
        return {
          x: totalsEntry.timestamp.getTime(),
          y: totalsEntry.homeLoanBalance,
        };
      }),
      name: 'Home Loan Balance',
    });
  }

  protected setSavingsBalanceChart(totalsEntries: TotalsEntry[]): void {
    this.savingsBalanceChart.addSerie({
      data: totalsEntries.map((totalsEntry: TotalsEntry) => {
        return {
          x: totalsEntry.timestamp.getTime(),
          y: totalsEntry.savingsBalance,
        };
      }),
      name: 'Savings Balance',
    });
  }

  protected setTotalsBalanceChart(totalsEntries: TotalsEntry[]): void {
    this.totalsBalanceChart.addSerie({
      data: totalsEntries.map((totalsEntry: TotalsEntry) => {
        return {
          x: totalsEntry.timestamp.getTime(),
          y: totalsEntry.calculateTotal(),
        };
      }),
      name: 'Totals Balance',
    });
  }


}
