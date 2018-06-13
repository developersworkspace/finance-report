import { AccountBalance } from './account-balance';

export class Account {

    constructor(
        public balances: AccountBalance[],
        public cash: boolean,
        public name: string,
    ) {

    }

}
