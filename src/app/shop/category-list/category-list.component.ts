import { Category } from './../../model/category.model';
import { CategoryRepository } from './../../model/category.repository';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css'],
})
export class CategoryListComponent implements OnInit {
  public selectedCategory: Category = null;
  @Output() category = new EventEmitter<Category>();
  @Output() page = new EventEmitter<number>();
  public selectedPage = 1;
  constructor(private categoryRepository: CategoryRepository) {}

  ngOnInit(): void {}
  get categories(): Category[] {
    return this.categoryRepository.getCategories();
  }
  changeCategory(newCategory?: Category) {
    this.selectedPage = 1;
    this.selectedCategory = newCategory;
    console.log(this.selectedCategory);
    this.category.emit(newCategory);
    this.page.emit(this.selectedPage);
  }
}
