import { Cart } from './../../model/cart.model';
import { Product } from './../../model/product.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  @Input() products: Product[] = [];
  selectedProduct: Product = null;
  constructor(private cartService: Cart) {}

  ngOnInit(): void {}
  addProductToCard(p: Product) {
    this.cartService.addItem(p);
  }
  displayDetails(p: Product) {
    this.selectedProduct = p;
  }
  hideDetails() {
    this.selectedProduct = null;
  }
}
