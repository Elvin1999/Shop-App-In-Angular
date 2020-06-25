import { Category } from './category.model';
import { RestService } from './rest.service';
import { Injectable, OnInit } from '@angular/core';

@Injectable()
export class CategoryRepository {
  private categories: Category[] = [];

  constructor(private restService: RestService) {
    this.restService
      .getCategories()
      .subscribe((categories) => (this.categories = categories));
  }
  deleteCategory(category: Category) {
    this.restService.deleteCategory(category).subscribe((i) =>
      this.categories.splice(
        this.categories.findIndex((p) => p.id == category.id),
        1
      )
    );
  }
  saveCategory(category: Category) {
    if (category.id == null || category.id == 0) {
      console.log('Add in repo');
      this.restService
        .addCategory(category)
        .subscribe((p) => this.categories.push(p));
    } else {
      this.restService.updateCategory(category).subscribe((p) => {
        this.categories.splice(
          this.categories.findIndex((p) => p.id === category.id),
          1,
          category
        );
      });
    }
  }
  getCategory(id: number): Category {
    return this.categories.find((p) => p.id == id);
  }
  getCategories(): Category[] {
    return this.categories;
  }
}
