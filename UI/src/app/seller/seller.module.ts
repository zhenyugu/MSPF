import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SellerRoutingModule } from './seller-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SellerComponent } from './seller.component';
import { GoodsManagementComponent } from './goods-management/goods-management.component';
import { OrdersManagementComponent } from './orders-management/orders-management.component';

import { GoodsDetailsComponent } from './goods-management/goods-details/goods-details.component';

@NgModule({
  imports: [CommonModule, SellerRoutingModule, FormsModule],
  declarations: [DashboardComponent, SellerComponent, GoodsManagementComponent, OrdersManagementComponent, GoodsDetailsComponent],
  providers: [],
})
export class SellerModule { }
