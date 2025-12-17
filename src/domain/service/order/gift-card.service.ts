import { Injectable } from '@nestjs/common';
import { OrderLineItem } from 'src/domain/models/order-line-item.model';

export interface GiftCardService {
  register(LineItem: OrderLineItem): void;
}

export const GIFT_CARD_SERVICE = 'GIFT_CARD_SERVICE';

@Injectable()
export class GiftCardServiceImpl implements GiftCardService {
  register(LineItem: OrderLineItem): void {
    console.log(`register new Line Item for sku ${LineItem.sku}`);
  }
}
