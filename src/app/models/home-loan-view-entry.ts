import { HomeLoanEntry } from './home-loan-entry';

export class HomeLoanViewEntry extends HomeLoanEntry {

    constructor(
        balance: number,
        public balanceDelta: number,
        public balanceGrowth: number,
        interest: number,
        public interestDelta: number,
        public repayment: number,
        timestamp: Date,
    ) {
        super(balance, interest, repayment, timestamp);
    }

}
