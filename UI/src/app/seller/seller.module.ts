import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SellerRoutingModule } from './seller-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SellerComponent } from './seller.component';
import { GoodsManagementComponent } from './goods-management/goods-management.component';
import { OrdersManagementComponent } from './orders-management/orders-management.component';

@NgModule({
  imports: [CommonModule, SellerRoutingModule],
  declarations: [DashboardComponent, SellerComponent, GoodsManagementComponent, OrdersManagementComponent],
  providers: [],
})
export class SellerModule { }
