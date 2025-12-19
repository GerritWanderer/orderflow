import { Inject } from '@nestjs/common';
import { GIFT_CARD_SERVICE, GiftCardService } from './gift-card.service';
import { SALES_ORDER_SERVICE, SalesOrderService } from './sales-order.service';
import { Order } from 'src/domain/model/order.model';

export const ORDER_SERVICE = 'ORDER_SERVICE';
export class OrderService {
  constructor(
    @Inject(GIFT_CARD_SERVICE)
    private readonly giftcardService: GiftCardService,
    @Inject(SALES_ORDER_SERVICE)
    private readonly salesOrderService: SalesOrderService,
  ) {}

  call(order: Order): void {
    this.giftcardService.register(order, order.lineItems[0]);
    this.salesOrderService.export(order);
  }
}
