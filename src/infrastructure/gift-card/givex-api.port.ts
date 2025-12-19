import { GiftCardApiPort } from 'src/domain/infrastructure/gift-card.api.port';
import { GiftCardModel } from 'src/domain/model/gift-card.model';
import { GiftCardRegisterDto } from '../dto/gift-card-register.dto';

export class GivexApiPort implements GiftCardApiPort {
  getCredentials(currency: string): { user: string; password: string } {}
  register(payload: GiftCardRegisterDto): Promise<GiftCardModel> {}
}
