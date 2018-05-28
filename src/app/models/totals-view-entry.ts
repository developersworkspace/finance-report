import { TotalsEntry } from './totals-entry';

export class TotalsViewEntry extends TotalsEntry {

    constructor(
        chequeBalance: number,
        creditBalance: number,
        homeLoanBalance: number,
        savingsBalance: number,
        timestamp: Date,
        public total: number,
        public totalDelta: number,
    ) {
        super(chequeBalance, creditBalance, homeLoanBalance, savingsBalance, timestamp);
    }

}
