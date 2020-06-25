import { Category } from 'src/app/model/category.model';
import { RestService } from './rest.service';
import { Product } from './product.model';
import { Injectable, OnInit } from '@angular/core';

@Injectable()
export class ProductRepository {
  private products: Product[] = [];

  constructor(private restService: RestService) {
    this.restService
      .getProducts()
      .subscribe((products) => (this.products = products));
  }
  deleteProduct(product: Product) {
    this.restService.deleteProduct(product).subscribe((i) =>
      this.products.splice(
        this.products.findIndex((p) => p.id == product.id),
        1
      )
    );
  }
  getProduct(id: number): Product {
    return this.products.find((p) => p.id == id);
  }
  getProducts(category: Category = null): Product[] {
    if (category) {
      return this.products.filter((p) => p.category === category.name);
    } else {
      return this.products;
    }
  }
  saveProduct(product: Product) {
    if (product.id == null || product.id == 0) {
      console.log('Add in repo');
      this.restService
        .addProduct(product)
        .subscribe((p) => this.products.push(p));
    } else {
      this.restService.updateProduct(product).subscribe((p) => {
        this.products.splice(
          this.products.findIndex((p) => p.id === product.id),
          1,
          product
        );
      });
    }
  }
}
