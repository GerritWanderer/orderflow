import { GiftCardApiPort } from 'src/domain/infrastructure/gift-card.api.port';
import { GiftCardModel } from 'src/domain/model/gift-card.model';
import { Order } from 'src/domain/model/order.model';
import { OrderLineItem } from 'src/domain/model/order-line-item.model';
import { Credentials } from 'src/domain/value-object/credentials.value-object';
import { ConfigService } from '@nestjs/config';
import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class GivexApiPort implements GiftCardApiPort {
  constructor(
    private configService: ConfigService,
    private readonly httpService: HttpService,
  ) {}

  getCredentials(currency: string): Credentials {
    return new Credentials(
      `${this.configService.get<string>(`GIVEX_${currency}_USER`)}`,
      `${this.configService.get<string>(`GIVEX_${currency}_PASSWORD`)}`,
    );
  }
  async register(
    order: Order,
    lineItem: OrderLineItem,
    credentials: Credentials,
  ): Promise<GiftCardModel> {
    const response = await firstValueFrom(
      this.httpService.post(
        'https://giftcard.beeceptor.com/register',
        {
          reference: order.reference,
          amount: lineItem.amount,
        },
        {
          headers: {
            token: `${credentials.username}`,
          },
        },
      ),
    );
    return new GiftCardModel(
      response.data?.number,
      response.data?.pin,
      lineItem.amount,
      order.reference,
      order.currency,
    );
  }
}
