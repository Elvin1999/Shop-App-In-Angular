import { ProductRepository } from './../../../model/product.repository';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/model/product.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent implements OnInit {
  editing = false;
  product: Product = new Product();
  constructor(
    private activeRoute: ActivatedRoute,
    private repository: ProductRepository,
    private router: Router
  ) {
    const key = 'mode';
    this.editing = activeRoute.snapshot.params[key] === 'edit';
    console.log(this.editing);
    const id = activeRoute.snapshot.params['id'];

    if (this.editing === true) {
      console.log(id);
      this.product = repository.getProduct(id);
      console.log(this.product);
    } else {
      console.log('creating');
    }
  }

  ngOnInit(): void {}
  save(form: NgForm) {
    console.log('Form.ts');
    console.log(this.product);
    this.repository.saveProduct(this.product);
    this.router.navigateByUrl('/admin/main/products');
  }
}
