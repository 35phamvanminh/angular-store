import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { DetailComponent } from './components/detail/detail.component';
import { AddOrEditComponent } from './components/add-or-edit/add-or-edit.component';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
  },
  {
    path: 'add',
    component: AddOrEditComponent,
  },
  {
    path: 'edit',
    component: AddOrEditComponent,
    children: [
      {
        path:':id', component: AddOrEditComponent
      },
    ]
  },
  {
    path: ':id',
    component: DetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
