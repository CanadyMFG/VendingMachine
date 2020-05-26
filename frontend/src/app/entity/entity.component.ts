import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-entity',
  templateUrl: './entity.component.html',
  styleUrls: ['./entity.component.css']
})
export class EntityComponent implements OnInit {
  id:any;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe( params => this.id = params.id );
   }

  ngOnInit(): void {
  }

}
