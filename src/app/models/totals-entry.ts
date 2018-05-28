export class TotalsEntry {

    constructor(
        public chequeBalance: number,
        public creditBalance: number,
        public homeLoanBalance: number,
        public savingsBalance: number,
        public timestamp: Date,
    ) {

    }

    public calculateTotal(): number {
        return Math.round((this.chequeBalance + this.creditBalance + this.homeLoanBalance + this.savingsBalance) * 100) / 100;
    }

}
