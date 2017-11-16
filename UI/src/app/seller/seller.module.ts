import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SellerRoutingModule } from './seller-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SellerComponent } from './seller.component';
import { GoodsManagementComponent } from './goods-management/goods-management.component';
import { OrdersManagementComponent } from './orders-management/orders-management.component';

import { GoodsDetailsComponent } from './goods-management/goods-details/goods-details.component';
import { GoodsServiceService } from './goods-management/goods-service.service';
import { AppConfigService } from '../services/app-config.service';

@NgModule({
  imports: [CommonModule, SellerRoutingModule, FormsModule, HttpClientModule],
  declarations: [DashboardComponent, SellerComponent, GoodsManagementComponent, OrdersManagementComponent, GoodsDetailsComponent],
  providers: [GoodsServiceService, AppConfigService]
})
export class SellerModule { }
