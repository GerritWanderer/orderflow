import { GiftCardApiPort } from 'src/domain/infrastructure/gift-card.api.port';
import { GiftCardModel } from 'src/domain/model/gift-card.model';
import { Order } from 'src/domain/model/order.model';
import { OrderLineItem } from 'src/domain/model/order-line-item.model';

export class GivexApiPort implements GiftCardApiPort {
  getCredentials(currency: string): { user: string; password: string } {
    return { user: 'hello', password: 'world' };
  }
  register(order: Order, lineItem: OrderLineItem): GiftCardModel {
    return new GiftCardModel(123123, 1234, lineItem.amount, order.currency);
  }
}
