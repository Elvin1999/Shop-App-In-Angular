import { CategoryRepository } from './../../../model/category.repository';
import { Category } from './../../../model/category.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent implements OnInit {

  editing = false;
  category: Category = new Category();
  constructor(
    private activeRoute: ActivatedRoute,
    private repository: CategoryRepository,
    private router: Router
  ) {
    const key = 'mode';
    this.editing = activeRoute.snapshot.params[key] === 'edit';
    console.log(this.editing);
    const id = activeRoute.snapshot.params['id'];

    if (this.editing === true) {
      console.log(id);
      this.category = repository.getCategory(id);
      console.log(this.category);
    } else {
      console.log('creating');
    }
  }

  ngOnInit(): void {}
  save(form: NgForm) {
    console.log('Form.ts');
    console.log(this.category);
    this.repository.saveCategory(this.category);
    this.router.navigateByUrl('/admin/main/categories');
  }
}
