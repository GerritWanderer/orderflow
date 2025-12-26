import { GiftCardApiPort } from 'src/domain/infrastructure/gift-card.api.port';
import { GiftCardModel } from 'src/domain/model/gift-card.model';
import { Order } from 'src/domain/model/order.model';
import { OrderLineItem } from 'src/domain/model/order-line-item.model';
import { Credentials } from 'src/domain/value-object/credentials.value-object';
import { ConfigService } from '@nestjs/config';
import { Injectable } from '@nestjs/common';

@Injectable()
export class GivexApiPort implements GiftCardApiPort {
  constructor(private configService: ConfigService) {}

  getCredentials(currency: string): Credentials {
    return new Credentials(
      `${this.configService.get<string>(`GIVEX_${currency}_USER`)}`,
      `${this.configService.get<string>(`GIVEX_${currency}_PASSWORD`)}`,
    );
  }
  register(
    order: Order,
    lineItem: OrderLineItem,
    credentials: Credentials,
  ): Promise<GiftCardModel> {
    return Promise.resolve(
      new GiftCardModel(
        123123,
        1234,
        lineItem.amount,
        order.reference,
        credentials.username,
      ),
    );
  }
}
