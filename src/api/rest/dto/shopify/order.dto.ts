import { OrderAttribute } from './order-attribute.dto';
import { OrderLineItem } from './order-line-item.dto';

export class OrderDto {
  public readonly reference: string;
  public readonly currency: string;
  public readonly email: string;
  public readonly attributes: OrderAttribute[];
  public readonly lineItems: OrderLineItem[];

  constructor(
    reference: string,
    currency: string,
    email: string,
    attributes: OrderAttribute[],
    lineItems: OrderLineItem[],
  ) {
    this.reference = reference;
    this.currency = currency;
    this.email = email;
    this.attributes = attributes;
    this.lineItems = lineItems;
  }
}
