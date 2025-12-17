import { OrderLineItem } from './order-line-item.dto';

export class OrderDto {
  public readonly number: string;
  public readonly email: string;
  public readonly lines: OrderLineItem[];
}
