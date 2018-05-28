import { Component } from '@angular/core';
import { HomeLoanViewEntry } from '../models/home-loan-view-entry';
import { HomeLoanEntry } from '../models/home-loan-entry';
import { HomeLoan } from '../models/home-loan';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-home-loan-route',
  templateUrl: './home-loan-route.component.html',
  styleUrls: ['./home-loan-route.component.css']
})
export class HomeLoanRouteComponent {

  public homeLoan: HomeLoan = null;

  public homeLoanEntries: HomeLoanEntry[] = null;

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

  public homeLoanBalanceDeltaChart = new Chart({
    chart: {
      type: 'line'
    },
    title: {
      text: 'Home Loan Balance Delta'
    },
    series: [],
    xAxis: {
      type: 'datetime'
    },
  });

  public homeLoanBalanceGrowthChart = new Chart({
    chart: {
      type: 'line'
    },
    title: {
      text: 'Home Loan % Balance Growth'
    },
    series: [],
    xAxis: {
      type: 'datetime'
    },
  });

  public homeLoanInterestChart = new Chart({
    chart: {
      type: 'line'
    },
    title: {
      text: 'Home Loan Interest'
    },
    series: [],
    xAxis: {
      type: 'datetime'
    },
  });

  public homeLoanInterestDeltaChart = new Chart({
    chart: {
      type: 'line'
    },
    title: {
      text: 'Home Loan Interest Delta'
    },
    series: [],
    xAxis: {
      type: 'datetime'
    },
  });

  public homeLoanRepaymentChart = new Chart({
    chart: {
      type: 'line'
    },
    title: {
      text: 'Home Loan Repayment'
    },
    series: [],
    xAxis: {
      type: 'datetime'
    },
  });

  constructor() {
    this.homeLoanEntries = [
      new HomeLoanEntry(457888.43, 4158.14, 4808.07, new Date(2017, 4, 27)),
      new HomeLoanEntry(457508.42, 4291.26, 4808.07, new Date(2017, 5, 27)),
      new HomeLoanEntry(456830.46, 4130.11, 4732.64, new Date(2017, 6, 27)),
      new HomeLoanEntry(456352.17, 4185.95, 4732.64, new Date(2017, 7, 27)),
      new HomeLoanEntry(455870.84, 4182.91, 4732.64, new Date(2017, 8, 27)),
      new HomeLoanEntry(455248.91, 4042.31, 4732.64, new Date(2017, 9, 27)),
      new HomeLoanEntry(454139.43, 4154.76, 4734.37, new Date(2017, 10, 27)),
      new HomeLoanEntry(448758.81, 4019.72, 4734.37, new Date(2017, 11, 27)),
      new HomeLoanEntry(432768.35, 4107.11, 4734.37, new Date(2018, 0, 27)),
      new HomeLoanEntry(432108.74, 4006.36, 4734.37, new Date(2018, 1, 27)),
      new HomeLoanEntry(431055.91, 3613.14, 4734.37, new Date(2018, 2, 27)),
      new HomeLoanEntry(426172.09, 3902.45, 4654.67, new Date(2018, 3, 27)),
    ];

    this.homeLoan = new HomeLoan(this.homeLoanEntries);

    const homeLoanViewEntries: HomeLoanViewEntry[] = this.homeLoan.toViewEntries();

    this.setHomeLoanBalanceChart(homeLoanViewEntries);
    this.setHomeLoanBalanceDeltaChart(homeLoanViewEntries);
    this.setHomeLoanBalanceGrowthChart(homeLoanViewEntries);
    this.setHomeLoanInterestChart(homeLoanViewEntries);
    this.setHomeLoanInterestDeltaChart(homeLoanViewEntries);
    this.setHomeLoanRepaymentChart(homeLoanViewEntries);
  }

  protected setHomeLoanBalanceChart(homeLoanViewEntries: HomeLoanViewEntry[]): void {
    this.homeLoanBalanceChart.addSerie({
      data: homeLoanViewEntries.map((homeLoanViewEntry: HomeLoanViewEntry) => {
        return {
          x: homeLoanViewEntry.timestamp.getTime(),
          y: homeLoanViewEntry.balance,
        };
      }),
      name: 'Balance',
    });
  }

  protected setHomeLoanBalanceDeltaChart(homeLoanViewEntries: HomeLoanViewEntry[]): void {
    this.homeLoanBalanceDeltaChart.addSerie({
      data: homeLoanViewEntries.map((homeLoanViewEntry: HomeLoanViewEntry) => {
        return {
          x: homeLoanViewEntry.timestamp.getTime(),
          y: homeLoanViewEntry.balanceDelta,
        };
      }),
      name: 'Balance Delta',
    });
  }

  protected setHomeLoanBalanceGrowthChart(homeLoanViewEntries: HomeLoanViewEntry[]): void {
    this.homeLoanBalanceGrowthChart.addSerie({
      data: homeLoanViewEntries.map((homeLoanViewEntry: HomeLoanViewEntry) => {
        return {
          x: homeLoanViewEntry.timestamp.getTime(),
          y: homeLoanViewEntry.balanceGrowth,
        };
      }),
      name: '% Balance Growth',
    });
  }

  protected setHomeLoanInterestChart(homeLoanViewEntries: HomeLoanViewEntry[]): void {
    this.homeLoanInterestChart.addSerie({
      data: homeLoanViewEntries.map((homeLoanViewEntry: HomeLoanViewEntry) => {
        return {
          x: homeLoanViewEntry.timestamp.getTime(),
          y: homeLoanViewEntry.interest,
        };
      }),
      name: 'Interest',
    });
  }

  protected setHomeLoanInterestDeltaChart(homeLoanViewEntries: HomeLoanViewEntry[]): void {
    this.homeLoanInterestDeltaChart.addSerie({
      data: homeLoanViewEntries.map((homeLoanViewEntry: HomeLoanViewEntry) => {
        return {
          x: homeLoanViewEntry.timestamp.getTime(),
          y: homeLoanViewEntry.interestDelta,
        };
      }),
      name: 'Interest Delta',
    });
  }

  protected setHomeLoanRepaymentChart(homeLoanViewEntries: HomeLoanViewEntry[]): void {
    this.homeLoanRepaymentChart.addSerie({
      data: homeLoanViewEntries.map((homeLoanViewEntry: HomeLoanViewEntry) => {
        return {
          x: homeLoanViewEntry.timestamp.getTime(),
          y: homeLoanViewEntry.repayment,
        };
      }),
      name: 'Repayment',
    });
  }

}
