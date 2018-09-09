import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageProductRoutingModule } from './manage-product-routing.module';
import { AddProductComponent } from './add-product/add-product.component';

@NgModule({
  imports: [
    CommonModule,
    ManageProductRoutingModule
  ],
  declarations: [AddProductComponent]
})
export class ManageProductModule { }
