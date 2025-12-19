import { GiftCardApiPort } from 'src/domain/infrastructure/gift-card.api.port';
import { GiftCardModel } from 'src/domain/model/gift-card.model';
import { GiftCardRegisterDto } from '../dto/gift-card-register.dto';

export class GivexApiPort implements GiftCardApiPort {
  getCredentials(currency: string): { user: string; password: string } {
    return { user: 'hello', password: 'world' };
  }
  register(payload: GiftCardRegisterDto): GiftCardModel {
    // send request to givex and register a new gift gift-card-register
    // return gift card for further processing
    return new GiftCardModel(123123, 1234, 100.0, 'EUR');
  }
}
