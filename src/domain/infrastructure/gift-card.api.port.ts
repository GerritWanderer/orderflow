export const GIFTCARD_API_PORT = 'GIFTCARD_API_PORT';

import { GiftCardRegisterDto } from 'src/infrastructure/dto/gift-card-register.dto';
import { GiftCardModel } from '../model/gift-card.model';

export interface GiftCardApiPort {
  getCredentials(currency: string): { user: string; password: string };
  register(payload: GiftCardRegisterDto): GiftCardModel;
}
