import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SellerRoutingModule } from './seller-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SellerComponent } from './seller.component';

@NgModule({
  imports: [CommonModule, SellerRoutingModule],
  declarations: [DashboardComponent, SellerComponent],
  providers: [],
})
export class SellerModule { }
