import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { EntityComponent } from './entity/entity.component';
import { EntityListComponent } from './entity-list/entity-list.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path:  "", pathMatch:  "full",redirectTo:  "home"},
  {path: "home", component: CategoriesComponent},
  {path: "entity/:id", component: EntityComponent},
  {path: "entity-list/:id", component: EntityListComponent},
  {path: "login", component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
