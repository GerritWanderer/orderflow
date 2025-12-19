export class GiftCardModel {
  public readonly number: number;
  public readonly pin: number;
  public readonly amount: number;
  public readonly currency: string;

  constructor(number: number, pin: number, amount: number, currency: string) {
    this.number = number;
    this.pin = pin;
    this.amount = amount;
    this.currency = currency;
  }
}
