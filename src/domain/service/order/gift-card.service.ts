import { Inject, Injectable } from '@nestjs/common';
import {
  GIFTCARD_API_PORT,
  GiftCardApiPort,
} from 'src/domain/infrastructure/gift-card.api.port';
import { OrderLineItem } from 'src/domain/model/order-line-item.model';
import { Order } from 'src/domain/model/order.model';

export interface GiftCardService {
  register(order: Order, lineItem: OrderLineItem): Promise<void>;
}

export const GIFT_CARD_SERVICE = 'GIFT_CARD_SERVICE';

@Injectable()
export class GiftCardServiceImpl implements GiftCardService {
  constructor(
    @Inject(GIFTCARD_API_PORT) public readonly giftcardApi: GiftCardApiPort,
  ) {}

  async register(order: Order, lineItem: OrderLineItem): Promise<void> {
    try {
      const credentials = this.giftcardApi.getCredentials(order.currency);
      const giftCard = await this.giftcardApi.register(
        order,
        lineItem,
        credentials,
      );
      console.log(giftCard);
    } catch {
      console.log('ERROR');
    }
  }
}
