import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Entity } from '../_model/entity.model';
import { EntityService } from '../_service/entity.service';


@Component({
  selector: 'app-entity',
  templateUrl: './entity.component.html',
  styleUrls: ['./entity.component.css']
})
export class EntityComponent implements OnInit {
  id:any;
  entity: Entity;

  constructor(private route: ActivatedRoute, private entityService: EntityService) {
    this.route.params.subscribe( params => this.id = params.id );
    this.entity = this.entityService.getEntityById(this.id);
   }

  ngOnInit(): void {

  }

}
