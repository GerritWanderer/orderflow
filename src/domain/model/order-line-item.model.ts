export class OrderLineItem {
  public readonly sku: string;
  public readonly amount: number;
  public readonly quantity: number;
  public readonly isGiftCard: boolean;

  constructor(
    sku: string,
    amount: number,
    quantity: number,
    isGiftCard: boolean,
  ) {
    this.sku = sku;
    this.amount = amount;
    this.quantity = quantity;
    this.isGiftCard = isGiftCard;
  }
}
