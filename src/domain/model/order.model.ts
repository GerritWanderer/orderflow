import { OrderLineItem } from './order-line-item.model';

export class Order {
  public readonly reference: string;
  public readonly currency: string;
  public readonly email: string;
  public readonly salesChannel: string;
  public readonly lineItems: OrderLineItem[];
}
