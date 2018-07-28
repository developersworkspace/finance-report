import { AccountBalance } from './account-balance';

export class Account {
  constructor(
    public balances: AccountBalance[],
    public cash: boolean,
    public loan: boolean,
    public name: string
  ) {}

  public getBalanceSeries(): { x: number; y: number }[] {
    return this.balances.map((balance: AccountBalance) => {
      return {
        x: balance.timestamp.getTime(),
        y: this.roundNumber(balance.value)
      };
    });
  }

  public getBalanceDeltaSeries(): { x: number; y: number }[] {
    return this.getDeltaSeries(this.getBalanceSeries());
  }

  public getInterestSeries(): { x: number; y: number }[] {
    return this.balances.map((balance: AccountBalance) => {
      return {
        x: balance.timestamp.getTime(),
        y: this.roundNumber(balance.interest)
      };
    });
  }

  public getInterestDeltaSeries(): { x: number; y: number }[] {
    return this.getDeltaSeries(this.getInterestSeries());
  }

  public getRepaymentSeries(): { x: number; y: number }[] {
    return this.balances.map((balance: AccountBalance) => {
      return {
        x: balance.timestamp.getTime(),
        y: this.roundNumber(balance.repayment)
      };
    });
  }

  public getRepaymentDeltaSeries(): { x: number; y: number }[] {
    return this.getDeltaSeries(this.getRepaymentSeries());
  }

  protected getDeltaSeries(
    data: { x: number; y: number }[]
  ): { x: number; y: number }[] {
    const result: { x: number; y: number }[] = [];

    for (let index = 1; index < data.length; index++) {
      result.push({
        x: data[index].x,
        y: this.roundNumber(data[index].y - data[index - 1].y)
      });
    }

    return result;
  }

  protected roundNumber(value: number): number {
    return Math.round(value * 100) / 100;
  }
}
