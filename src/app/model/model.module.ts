import { AuthService } from './auth.service';
import { Order } from './order.model';
import { OrderRepository } from './order.repository';
import { Cart } from './cart.model';
import { CategoryRepository } from './category.repository';
import { ProductRepository } from './product.repository';
import { RestService } from './rest.service';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [HttpClientModule],
  providers: [
    RestService,
    ProductRepository,
    CategoryRepository,
    Cart,
    Order,
    OrderRepository,
    AuthService
  ],
})
export class ModelModule {}
