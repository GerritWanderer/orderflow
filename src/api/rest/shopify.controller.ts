import { Body, Controller, Inject, Post, UseGuards } from '@nestjs/common';
import { OrderDto } from './dto/shopify/order.dto';
import { Order } from '../../domain/models/order.model';
import { ShopifyWebhookGuard } from './guards/shopify-webhook.guard';
import { OrderLineItem } from 'src/domain/models/order-line-item.model';
import {
  ORDER_SERVICE,
  OrderService,
} from 'src/domain/service/order/order.service';

@Controller('shopify')
@UseGuards(ShopifyWebhookGuard)
export class ShopifyController {
  constructor(
    @Inject(ORDER_SERVICE)
    private readonly orderService: OrderService,
  ) {}

  @Post()
  shopify(@Body() shopifyOrder: OrderDto): void {
    const salesChannel = this.getSalesChannel(shopifyOrder);
    if (salesChannel) {
      const order: Order = this.buildOrder(shopifyOrder, salesChannel);
      this.orderService.call(order);
    }
  }

  private getSalesChannel(shopifyOrder: OrderDto): string | null {
    const attributes = shopifyOrder.attributes ?? [];
    const value = attributes.find(
      (attr) => attr.name == 'sales_channel',
    )?.value;
    return value ?? null;
  }

  private buildOrder(order: OrderDto, salesChannel: string): Order {
    return {
      reference: order.reference,
      email: order.email,
      lineItems: order.lineItems.map((lineItem): OrderLineItem => lineItem),
      salesChannel: salesChannel,
    };
  }
}
