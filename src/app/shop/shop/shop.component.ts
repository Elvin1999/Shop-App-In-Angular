import { Product } from './../../model/product.model';
import { Cart } from './../../model/cart.model';
import { CategoryRepository } from '../../model/category.repository';
import { ProductRepository } from '../../model/product.repository';
import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/model/category.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
})
export class ShopComponent implements OnInit {
  public productsPerPage = 3;
  public selectedCategory: Category = null;
  public selectedPage = 1;
  public selectedProducts: Product[] = [];
  constructor(
    private productRepository: ProductRepository,
    private categoryRepository: CategoryRepository,
    private cartService: Cart,
    private router: Router
  ) {}
  get isOnePage(): boolean {
    const data = this.pageNumbers.length;
    if (data !== 1) {
      return true;
    } else {
      return false;
    }
  }
  get pageNumbers(): number[] {
    return Array(
      Math.ceil(
        this.productRepository.getProducts(this.selectedCategory).length /
          this.productsPerPage
      )
    )
      .fill(0)
      .map((a, i) => i + 1);
  }
  ngOnInit(): void {}
  get products(): Product[] {
    const index = (this.selectedPage - 1) * this.productsPerPage;
    this.selectedProducts = this.productRepository.getProducts(
      this.selectedCategory
    );
    return this.selectedProducts.slice(index, index + this.productsPerPage);
  }

  changePage(i: number) {
    this.selectedPage = i + 1;
  }

  changePerSize(size: number) {
    this.productsPerPage = size;
    console.log(this.products);
    this.changePage(1);
  }
  getCategory(category: Category) {
    this.selectedCategory = category;
  }
  getPage(page: number) {
    this.selectedPage = page;
  }
}
