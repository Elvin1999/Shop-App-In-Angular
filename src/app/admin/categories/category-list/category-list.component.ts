import { CategoryRepository } from './../../../model/category.repository';
import { Category } from './../../../model/category.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css'],
})
export class CategoryListComponent implements OnInit {
  constructor(private repository: CategoryRepository) {}

  ngOnInit(): void {}
  deleteCategory(c: Category) {
    this.repository.deleteCategory(c);
  }
  getCategories(): Category[] {
    return this.repository.getCategories();
  }
}
