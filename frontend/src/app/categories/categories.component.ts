import { Component, OnInit } from '@angular/core';

import { CategoryService } from '../_service/category.service'
import { Category } from '../_model/category.model';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories: Category[];
  newCategories = [];
  constructor(private categoryService: CategoryService) { }


  ngOnInit(): void {
    this.categories = this.categoryService.getCategories();
    
    const size = 4;
    for(let i=0; i<this.categories.length; i+=size) {
      this.newCategories.push(this.categories.slice(i, i+size))
    }

  }

}
