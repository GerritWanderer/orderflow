import { Inject, Injectable } from '@nestjs/common';
import {
  GIFTCARD_API_PORT,
  GiftCardApiPort,
} from 'src/domain/infrastructure/gift-card.api.port';
import { OrderLineItem } from 'src/domain/model/order-line-item.model';
import { Order } from 'src/domain/model/order.model';
import { GiftCardRegisterDto } from 'src/infrastructure/dto/gift-card-register.dto';

export interface GiftCardService {
  register(LineItem: OrderLineItem): void;
}

export const GIFT_CARD_SERVICE = 'GIFT_CARD_SERVICE';

@Injectable()
export class GiftCardServiceImpl implements GiftCardService {
  constructor(
    @Inject(GIFTCARD_API_PORT) public readonly giftcardApi: GiftCardApiPort,
  ) {}

  register(order: Order, lineItem: OrderLineItem): void {
    const giftCardRegisterDto = this.giftCardRegisterDtoMapper(order, lineItem);
    this.giftcardApi.register(giftCardRegisterDto);
  }

  giftCardRegisterDtoMapper(
    order: Order,
    lineItem: OrderLineItem,
  ): GiftCardRegisterDto {
    return new GiftCardRegisterDto(lineItem.amount, order.currency);
  }
}
