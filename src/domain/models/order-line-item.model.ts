export class OrderLineItem {
  public readonly quantity: number;
  public readonly sku: string;
  public readonly isGiftCard: boolean;

  constructor(sku: string, quantity: number, isGiftCard: boolean) {
    this.sku = sku;
    this.quantity = quantity;
    this.isGiftCard = isGiftCard;
  }
}
