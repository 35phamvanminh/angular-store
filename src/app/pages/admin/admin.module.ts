import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { NavbarComponent } from '../../layouts/navbar/navbar.component';
import { SidebarComponent } from '../../layouts/sidebar/sidebar.component';


@NgModule({
  declarations: [
    AdminComponent,
    NavbarComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
