import { Observable } from 'rxjs';
import { RestService } from './rest.service';
import { Order } from './order.model';
import { Injectable } from '@angular/core';

@Injectable()
export class OrderRepository {
  private orders: Order[] = [];

  constructor(private restService: RestService) {}
  getOrders(): Order[] {
    return this.orders;
  }
  saveOrder(order: Order): Observable<Order> {
    return this.restService.saveOrder(order);
  }
}
