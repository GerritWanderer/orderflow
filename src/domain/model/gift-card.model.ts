export class GiftCardModel {
  public readonly number: number;
  public readonly pin: number;
  public readonly amount: number;
  public readonly reference: string;
  public readonly currency: string;

  constructor(
    number: number,
    pin: number,
    amount: number,
    reference: string,
    currency: string,
  ) {
    this.number = number;
    this.pin = pin;
    this.amount = amount;
    this.reference = reference;
    this.currency = currency;
  }
}
