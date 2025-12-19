export const GIFTCARD_API_PORT = 'GIFTCARD_API_PORT';

import { GiftCardModel } from '../model/gift-card.model';
import { Order } from '../model/order.model';
import { OrderLineItem } from '../model/order-line-item.model';

export interface GiftCardApiPort {
  getCredentials(currency: string): { user: string; password: string };
  register(order: Order, lineItem: OrderLineItem): GiftCardModel;
}
