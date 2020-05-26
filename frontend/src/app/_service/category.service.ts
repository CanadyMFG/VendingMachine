import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { Category } from '../_model/category.model';

@Injectable({ providedIn: 'root' })
export class CategoryService {

    categories: Category[] = [{name: "drills", Entities: [], _id: "1"}, {name: "amigos", Entities: [], _id: "2"}, 
    {name: "hehe", Entities: [{name: "the big one", quantity: 57, _id: "1"}, {name: "the small one", quantity: 2, _id: "1"}], _id: "3"},{name: "hoho", Entities: [], _id: "4"},
    {name: "steel", Entities: [], _id: "5"},{name: "alum", Entities: [], _id: "6"},
    {name: "brass", Entities: [], _id: "7"},{name: "something", Entities: [], _id: "8"},
    {name: "drills", Entities: [], _id: "1"}, {name: "amigos", Entities: [], _id: "2"}, 
    {name: "hehe", Entities: [], _id: "3"},{name: "hoho", Entities: [], _id: "4"},
    {name: "steel", Entities: [], _id: "5"},{name: "alum", Entities: [], _id: "6"},
    {name: "brass", Entities: [], _id: "7"},{name: "something", Entities: [], _id: "8"}];

    getCategories() {
        return this.categories;
    }

    getCategoryByID(id) {
        return this.categories.find(cat => cat._id === id);
    }
}