import { OrderAttribute } from './order-attribute.dto';
import { OrderLineItem } from './order-line-item.dto';
import { IsAlphanumeric, IsEmail, IsString, Matches } from 'class-validator';

export class OrderDto {
  @IsAlphanumeric()
  @Matches(/ON[0-9]*/)
  public readonly reference: string;

  @IsString()
  public readonly currency: string;

  @IsEmail()
  public readonly email: string;

  public readonly attributes: OrderAttribute[];

  public readonly lineItems: OrderLineItem[];
}
