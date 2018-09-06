import { Injectable } from '@angular/core';
import { Account } from './models/account';
import { AccountBalance } from './models/account-balance';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor() {

  }

  public list(): Account[] {
    return [
      this.chequeAccount(),
      this.creditAccount(),
      this.homeLoanBondAccount(),
      this.homeLoanFlexiAccount(),
      this.propertyAccount(),
      this.savingsAccount(),
      this.vehicleAccount(),
      this.vehicleLoanAccount(),
    ];
  }

  protected chequeAccount(): Account {
    return new Account([
      new AccountBalance(12015.37, null, null, new Date(2018, 0, 31)),
      new AccountBalance(9124.55, null, null, new Date(2018, 1, 28)),
      new AccountBalance(14088.66, null, null, new Date(2018, 2, 31)),
      new AccountBalance(11938.97, null, null, new Date(2018, 3, 30)),
      new AccountBalance(8063.58, null, null, new Date(2018, 4, 31)),
      new AccountBalance(6732.41, null, null, new Date(2018, 5, 30)),
      new AccountBalance(21591.10, null, null, new Date(2018, 6, 31)),
      new AccountBalance(9792.10, null, null, new Date(2018, 7, 31)),

      new AccountBalance(9879.53, null, null, new Date(2018, 8, 30)),
    ], true, false, 'Cheque');
  }

  protected creditAccount(): Account {
    return new Account([
      new AccountBalance(-1529.03, null, null, new Date(2018, 0, 31)),
      new AccountBalance(-1907.91, null, null, new Date(2018, 1, 28)),
      new AccountBalance(-7060.58, null, null, new Date(2018, 2, 31)),
      new AccountBalance(-3837.2, null, null, new Date(2018, 3, 30)),
      new AccountBalance(-1416.20, null, null, new Date(2018, 4, 31)),
      new AccountBalance(0, null, null, new Date(2018, 5, 30)),
      new AccountBalance(-3319.87, null, null, new Date(2018, 6, 31)),
      new AccountBalance(23.29, null, null, new Date(2018, 7, 31)),

      new AccountBalance(219.09, null, null, new Date(2018, 8, 30)),
    ], false, false, 'Credit');
  }

  protected homeLoanBondAccount(): Account {
    return new Account([
      new AccountBalance(-457888.43, 4158.14, 4808.07, new Date(2017, 4, 31)),
      new AccountBalance(-457508.42, 4291.26, 4808.07, new Date(2017, 5, 30)),
      new AccountBalance(-456830.46, 4130.11, 4732.64, new Date(2017, 6, 31)),
      new AccountBalance(-456352.17, 4185.95, 4732.64, new Date(2017, 7, 30)),
      new AccountBalance(-455870.84, 4182.91, 4732.64, new Date(2017, 8, 31)),
      new AccountBalance(-455248.91, 4042.31, 4732.64, new Date(2017, 9, 31)),
      new AccountBalance(-454139.43, 4154.76, 4734.37, new Date(2017, 10, 30)),
      new AccountBalance(-448758.81, 4019.72, 4734.37, new Date(2017, 11, 31)),
      new AccountBalance(-432768.35, 4107.11, 4734.37, new Date(2018, 0, 31)),
      new AccountBalance(-432108.74, 4006.36, 4734.37, new Date(2018, 1, 28)),
      new AccountBalance(-431055.91, 3613.14, 4734.37, new Date(2018, 2, 31)),
      new AccountBalance(-426172.09, 3902.45, 4654.67, new Date(2018, 3, 30)),
      new AccountBalance(-425317.62, 3731.80, 4654.67, new Date(2018, 4, 31)),
      new AccountBalance(-424579.77, 3848.42, 4654.67, new Date(2018, 5, 30)),
      new AccountBalance(-423710.03, 3716.53, 4655.27, new Date(2018, 6, 31)),
      new AccountBalance(-399097.25, 3673.49, 4655.27, new Date(2018, 7, 31)),

      new AccountBalance(-399097.25, 3673.49, 4655.27, new Date(2018, 8, 30)),
    ], false, true, 'Home Loan Bond');
  }

  protected homeLoanFlexiAccount(): Account {
    return new Account([
      new AccountBalance(16100.00, null, null, new Date(2018, 0, 31)),
      new AccountBalance(16100.00, null, null, new Date(2018, 1, 28)),
      new AccountBalance(16100.00, null, null, new Date(2018, 2, 31)),
      new AccountBalance(20300.00, null, null, new Date(2018, 3, 30)),
      new AccountBalance(20300.00, null, null, new Date(2018, 4, 31)),
      new AccountBalance(20300.00, null, null, new Date(2018, 5, 30)),
      new AccountBalance(20300.00, null, null, new Date(2018, 6, 31)),
      new AccountBalance(44000, null, null, new Date(2018, 7, 31)),

      new AccountBalance(44000, null, null, new Date(2018, 8, 30)),
    ], true, false, 'Home Loan Flexi');
  }

  protected propertyAccount(): Account {
    return new Account([
      new AccountBalance(750000, null, null, new Date(2017, 4, 31)),
      new AccountBalance(750000, null, null, new Date(2017, 5, 30)),
      new AccountBalance(750000, null, null, new Date(2017, 6, 31)),
      new AccountBalance(750000, null, null, new Date(2017, 7, 30)),
      new AccountBalance(750000, null, null, new Date(2017, 8, 31)),
      new AccountBalance(750000, null, null, new Date(2017, 9, 31)),
      new AccountBalance(750000, null, null, new Date(2017, 10, 30)),
      new AccountBalance(750000, null, null, new Date(2017, 11, 31)),
      new AccountBalance(750000, null, null, new Date(2018, 0, 31)),
      new AccountBalance(750000, null, null, new Date(2018, 1, 28)),
      new AccountBalance(750000, null, null, new Date(2018, 2, 31)),
      new AccountBalance(750000, null, null, new Date(2018, 3, 30)),
      new AccountBalance(850000, null, null, new Date(2018, 4, 31)),
      new AccountBalance(850000, null, null, new Date(2018, 5, 30)),
      new AccountBalance(850000, null, null, new Date(2018, 6, 31)),
      new AccountBalance(975000, null, null, new Date(2018, 7, 31)),

      new AccountBalance(975000, null, null, new Date(2018, 8, 30)),
    ], false, false, 'Property');
  }

  protected savingsAccount(): Account {
    return new Account([
      new AccountBalance(122852.87, null, null, new Date(2018, 0, 31)),
      new AccountBalance(134115.78, null, null, new Date(2018, 1, 28)),
      new AccountBalance(137895.92, null, null, new Date(2018, 2, 31)),
      new AccountBalance(78542.55, null, null, new Date(2018, 3, 30)),
      new AccountBalance(44878.69, null, null, new Date(2018, 4, 31)),
      new AccountBalance(28981.98, null, null, new Date(2018, 5, 30)),
      new AccountBalance(41584.64, null, null, new Date(2018, 6, 31)),
      new AccountBalance(23206.15, null, null, new Date(2018, 7, 31)),

      new AccountBalance(29354.82 + 10000, null, null, new Date(2018, 8, 30)),
    ], true, false, 'Savings');
  }

  protected vehicleAccount(): Account {
    return new Account([
      new AccountBalance(140000, null, null, new Date(2018, 0, 31)),
      new AccountBalance(140000, null, null, new Date(2018, 1, 28)),
      new AccountBalance(140000, null, null, new Date(2018, 2, 31)),
      new AccountBalance(140000, null, null, new Date(2018, 3, 30)),
      new AccountBalance(140000, null, null, new Date(2018, 4, 31)),
      new AccountBalance(140000, null, null, new Date(2018, 5, 30)),
      new AccountBalance(140000, null, null, new Date(2018, 6, 31)),
      new AccountBalance(140000, null, null, new Date(2018, 7, 31)),

      new AccountBalance(140000, null, null, new Date(2018, 8, 30)),
    ], false, false, 'Vehicle');
  }

  protected vehicleLoanAccount(): Account {
    return new Account([
      new AccountBalance(-95097.18, 968.34, 2120.35, new Date(2018, 0, 31)),
      new AccountBalance(-92955.17, 978.39, 2118.87, new Date(2018, 1, 28)),
      new AccountBalance(-91774.08, 873.14, 2119.43, new Date(2018, 2, 31)),
      new AccountBalance(-90672.18, 952.33, 2107.20, new Date(2018, 3, 30)),
      new AccountBalance(-89522.99, 893.54, 2106.46, new Date(2018, 4, 31)),
      new AccountBalance(-88392.76, 912.50, 2106.41, new Date(2018, 5, 30)),
      new AccountBalance(-87221.08, 871.05, 2105.66, new Date(2018, 6, 31)),
      new AccountBalance(-86067.38, 889.03, 2105.60, new Date(2018, 7, 31)),

      new AccountBalance(-86067.38, 889.03, 2105.60, new Date(2018, 8, 30)),
    ], false, true, 'Vehicle Loan');
  }

}
