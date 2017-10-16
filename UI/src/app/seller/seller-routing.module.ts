import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SellerComponent } from './seller.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '', component: SellerComponent,
    children:
    [
      {
        path: '', redirectTo: 'dashboard'
      },
      {
        path: 'dashboard', component: DashboardComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SellerRoutingModule { }
