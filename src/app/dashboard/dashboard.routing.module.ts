import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModalPageComponent } from '../Shared/Modal.component';
import { DashboardComponent } from './dashboard.component';

const dashboardRoutes:Routes = [
    {
        path: '',
        component: DashboardComponent,
        children:[
      {
        path:'modal',
        component:ModalPageComponent
      }
        ]
      }
];

@NgModule({
  imports: [RouterModule.forChild(dashboardRoutes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
