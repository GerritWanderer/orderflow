import { Injectable } from '@nestjs/common';
import { Order } from 'src/domain/model/order.model';

export interface SalesOrderService {
  export(order: Order): void;
}

export const SALES_ORDER_SERVICE = 'SALES_ORDER_SERVICE';

@Injectable()
export class SalesOrderServiceImpl implements SalesOrderService {
  export(order: Order): void {
    console.log(`order exported ${order.reference}`);
  }
}
