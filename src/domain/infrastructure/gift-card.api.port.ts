export const GIFTCARD_API_PORT = 'GIFTCARD_API_PORT';

import { GiftCardModel } from 'src/domain/model/gift-card.model';
import { Order } from 'src/domain/model/order.model';
import { OrderLineItem } from 'src/domain/model/order-line-item.model';
import { Credentials } from 'src/domain/value-object/credentials.value-object';

export interface GiftCardApiPort {
  getCredentials(currency: string): Credentials;
  register(
    order: Order,
    lineItem: OrderLineItem,
    credentials: Credentials,
  ): Promise<GiftCardModel>;
}
