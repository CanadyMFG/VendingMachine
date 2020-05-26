import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { Category } from '../_model/category.model';

@Injectable({ providedIn: 'root' })
export class CategoryService {

    categories: Category[];

    getCategories() {
        this.categories = [{name: "drills", Entities: [], _id: "1"}, {name: "amigos", Entities: [], _id: "2"}, 
                            {name: "hehe", Entities: [], _id: "3"},{name: "hoho", Entities: [], _id: "4"},
                            {name: "steel", Entities: [], _id: "5"},{name: "alum", Entities: [], _id: "6"},
                            {name: "brass", Entities: [], _id: "7"},{name: "something", Entities: [], _id: "8"},
                            {name: "drills", Entities: [], _id: "1"}, {name: "amigos", Entities: [], _id: "2"}, 
                            {name: "hehe", Entities: [], _id: "3"},{name: "hoho", Entities: [], _id: "4"},
                            {name: "steel", Entities: [], _id: "5"},{name: "alum", Entities: [], _id: "6"},
                            {name: "brass", Entities: [], _id: "7"},{name: "something", Entities: [], _id: "8"}];

        return this.categories;
    }
}