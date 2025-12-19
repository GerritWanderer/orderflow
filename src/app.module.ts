import { Module } from '@nestjs/common';
import { ShopifyController } from './api/rest/shopify.controller';
import { ShopifyWebhookGuard } from './api/rest/guards/shopify-webhook.guard';
import {
  SALES_ORDER_SERVICE,
  SalesOrderServiceImpl,
} from './domain/service/order/sales-order.service';
import {
  GIFT_CARD_SERVICE,
  GiftCardServiceImpl,
} from './domain/service/order/gift-card.service';
import {
  ORDER_SERVICE,
  OrderService,
} from './domain/service/order/order.service';
import { SolidusController } from './api/rest/solidus.controller';
import { SolidusWebhookGuard } from './api/rest/guards/solidus-webhook.guard';
import { GIFTCARD_API_PORT } from './domain/infrastructure/gift-card.api.port';
import { GivexApiPort } from './infrastructure/gift-card/givex-api.port';

@Module({
  imports: [],
  controllers: [ShopifyController, SolidusController],
  providers: [
    ShopifyWebhookGuard,
    SolidusWebhookGuard,
    { provide: ORDER_SERVICE, useClass: OrderService },
    { provide: SALES_ORDER_SERVICE, useClass: SalesOrderServiceImpl },
    { provide: GIFT_CARD_SERVICE, useClass: GiftCardServiceImpl },
    { provide: GIFTCARD_API_PORT, useClass: GivexApiPort },
  ],
})
export class AppModule {}
