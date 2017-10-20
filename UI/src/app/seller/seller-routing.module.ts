import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SellerComponent } from './seller.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GoodsManagementComponent } from './goods-management/goods-management.component';
import { OrdersManagementComponent } from './orders-management/orders-management.component';
import { GoodsDetailsComponent } from './goods-management/goods-details/goods-details.component';
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
      },
      {
        path: 'goodsManagement', component: GoodsManagementComponent, children: [{
          path: 'goodsDetails', component: GoodsDetailsComponent
        }]
      },
      {
        path: 'ordersManagement', component: OrdersManagementComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SellerRoutingModule { }
