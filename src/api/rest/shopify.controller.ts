import {
  Body,
  Controller,
  Inject,
  Post,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { OrderDto } from './dto/shopify/order.dto';
import { Order } from 'src/domain/model/order.model';
import { ShopifyWebhookGuard } from './guards/shopify-webhook.guard';
import {
  ORDER_SERVICE,
  OrderService,
} from 'src/domain/service/order/order.service';
import { plainToInstance } from 'class-transformer';

@Controller('shopify')
@UseGuards(ShopifyWebhookGuard)
export class ShopifyController {
  constructor(
    @Inject(ORDER_SERVICE)
    private readonly orderService: OrderService,
  ) {}

  @Post()
  shopify(@Body(new ValidationPipe()) shopifyOrder: OrderDto): void {
    const salesChannel = this.getSalesChannel(shopifyOrder);
    if (salesChannel) {
      const order = plainToInstance(
        Order,
        Object.assign(shopifyOrder, { salesChannel }),
      );
      this.processOrder(order).catch((error) => {
        console.log(`${error}`);
      });
    }
  }

  private getSalesChannel(shopifyOrder: OrderDto): string | null {
    const attributes = shopifyOrder.attributes ?? [];
    const value = attributes.find(
      (attr) => attr.name == 'sales_channel',
    )?.value;
    return value ?? null;
  }
  private async processOrder(order: Order) {
    return await this.orderService.call(order);
  }
}
