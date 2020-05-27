import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { Category } from '../_model/category.model';
import { Entity } from '../_model/entity.model';

@Injectable({ providedIn: 'root' })
export class EntityService {

    entity: Entity[] = [{name: "Drill bit", quantity: 57, _id: "1"}, {name: "Endmill", quantity: 2, _id: "2"}];

    getEntityById(id) {
        return this.entity.find(entity => entity._id === id);
    }

}