import { NgModule } from '@angular/core';
import { DashboardRoutingModule } from './dashboard.routing.module';
import { DashboardComponent } from './dashboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ModalPageComponent } from '../Shared/Modal.component';

@NgModule({
  declarations: [
    DashboardComponent,
    NavbarComponent,
    ModalPageComponent
  ],
  imports: [
    DashboardRoutingModule,
   
    
  ],
  providers: [],
})
export class DashboardModule { }
