import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { DetailComponent } from './components/detail/detail.component';
import { AddOrEditComponent } from './components/add-or-edit/add-or-edit.component';
import { UserComponent } from './user.component';


@NgModule({
  declarations: [
    UserComponent,
    AddOrEditComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
