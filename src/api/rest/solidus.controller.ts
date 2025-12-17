import {
  ORDER_SERVICE,
  OrderService,
} from 'src/domain/service/order/order.service';
import { SolidusWebhookGuard } from './guards/solidus-webhook.guard';
import { Body, Controller, Inject, Post, UseGuards } from '@nestjs/common';
import { Order } from 'src/domain/models/order.model';
import { OrderLineItem } from 'src/domain/models/order-line-item.model';
import { OrderDto } from './dto/solidus/order.dto';

@Controller('solidus')
@UseGuards(SolidusWebhookGuard)
export class SolidusController {
  constructor(
    @Inject(ORDER_SERVICE) private readonly orderService: OrderService,
  ) {}
  SALES_CHANNEL = 'solidus';

  @Post()
  createOrder(@Body() solidusOrder: OrderDto): void {
    const order = this.buildOrder(solidusOrder);
    this.orderService.call(order);
  }

  private buildOrder(order: OrderDto): Order {
    return {
      reference: order.number,
      salesChannel: this.SALES_CHANNEL,
      email: order.email,
      lineItems: order.lines.map(
        (lineItem): OrderLineItem =>
          new OrderLineItem(lineItem.sku, lineItem.quantity, false),
      ),
    };
  }
}
