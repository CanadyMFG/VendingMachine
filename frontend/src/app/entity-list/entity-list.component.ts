import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { CategoryService } from '../_service/category.service';
import { Category } from '../_model/category.model';

@Component({
  selector: 'app-entity-list',
  templateUrl: './entity-list.component.html',
  styleUrls: ['./entity-list.component.css']
})
export class EntityListComponent implements OnInit {
  id:any;
  category: Category;
  constructor(private route: ActivatedRoute, private categoryService: CategoryService) { 
    this.route.params.subscribe( params => this.id = params.id );
    this.category = categoryService.getCategoryByID(this.id);
  }

  ngOnInit(): void {
    
  }

}
