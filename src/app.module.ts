import { Module } from '@nestjs/common';
import { ShopifyController } from 'src/api/rest/shopify.controller';
import { ShopifyWebhookGuard } from 'src/api/rest/guards/shopify-webhook.guard';
import {
  SALES_ORDER_SERVICE,
  SalesOrderServiceImpl,
} from 'src/domain/service/order/sales-order.service';
import {
  GIFT_CARD_SERVICE,
  GiftCardServiceImpl,
} from 'src/domain/service/order/gift-card.service';
import {
  ORDER_SERVICE,
  OrderService,
} from 'src/domain/service/order/order.service';
import { SolidusController } from 'src/api/rest/solidus.controller';
import { SolidusWebhookGuard } from 'src/api/rest/guards/solidus-webhook.guard';
import { GIFTCARD_API_PORT } from 'src/domain/infrastructure/gift-card.api.port';
import { GivexApiPort } from 'src/infrastructure/gift-card/givex-api.port';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true })],
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
