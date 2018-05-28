import { HomeLoanEntry } from './home-loan-entry';
import { HomeLoanViewEntry } from './home-loan-view-entry';

export class HomeLoan {

    constructor(
        public entries: HomeLoanEntry[],
    ) {

    }

    public toViewEntries(): HomeLoanViewEntry[] {
        const result: HomeLoanViewEntry[] = [];

        let previous: HomeLoanEntry = null;

        for (let index = 0; index < this.entries.length; index ++) {
            const current: HomeLoanEntry = this.entries[index];

            result.push(new HomeLoanViewEntry(
                current.balance,
                this.calculateBalanceDelta(current, previous),
                this.calculateBalanceGrowth(current, previous),
                current.interest,
                this.calculateInterestDelta(current, previous),
                current.repayment,
                current.timestamp,
            ));

            previous = current;
        }

        return result;
    }

    protected calculateBalanceDelta(current: HomeLoanEntry, previous: HomeLoanEntry): number {
        if (!previous) {
            return null;
        }

        return Math.round((current.balance - previous.balance) * 100) / 100;
    }

    protected calculateBalanceGrowth(current: HomeLoanEntry, previous: HomeLoanEntry): number {
        if (!previous) {
            return null;
        }

        return Math.round(((current.balance - previous.balance) / previous.balance * 100) * 100) / 100;
    }

    protected calculateInterestDelta(current: HomeLoanEntry, previous: HomeLoanEntry): number {
        if (!previous) {
            return null;
        }

        return Math.round((current.interest - previous.interest) * 100) / 100;
    }

}
