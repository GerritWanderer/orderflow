import { GiftCardApiPort } from 'src/domain/infrastructure/gift-card.api.port';
import { GiftCardModel } from 'src/domain/model/gift-card.model';
import { Order } from 'src/domain/model/order.model';
import { OrderLineItem } from 'src/domain/model/order-line-item.model';
import { Credentials } from 'src/domain/value-object/credentials.value-object';

export class GivexApiPort implements GiftCardApiPort {
  getCredentials(currency: string): Credentials {
    return new Credentials(`${currency}`, 'helloworld');
  }
  register(
    order: Order,
    lineItem: OrderLineItem,
    credentials: Credentials,
  ): GiftCardModel {
    return new GiftCardModel(
      123123,
      1234,
      lineItem.amount,
      order.reference,
      credentials.username,
    );
  }
}
