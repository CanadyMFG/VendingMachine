import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-entity-list',
  templateUrl: './entity-list.component.html',
  styleUrls: ['./entity-list.component.css']
})
export class EntityListComponent implements OnInit {
  id:any;
  constructor(private route: ActivatedRoute) { 
    this.route.params.subscribe( params => this.id = params.id );
  }

  ngOnInit(): void {
  }

}
