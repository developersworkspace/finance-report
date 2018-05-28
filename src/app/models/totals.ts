import { TotalsEntry } from './totals-entry';
import { TotalsViewEntry } from './totals-view-entry';

export class Totals {

    constructor(
        protected entries: TotalsEntry[],
    ) {

    }

    public toViewEntries(): TotalsViewEntry[] {
        const result: TotalsViewEntry[] = [];

        let previous: TotalsEntry = null;

        for (let index = 0; index < this.entries.length; index++) {
            const current: TotalsEntry = this.entries[index];

            result.push(new TotalsViewEntry(
                current.chequeBalance,
                current.creditBalance,
                current.homeLoanBalance,
                current.savingsBalance,
                current.timestamp,
                current.calculateTotal(),
                previous ? Math.round((current.calculateTotal() - previous.calculateTotal()) * 100) / 100 : null,
            ));

            previous = current;
        }

        return result;
    }

}
