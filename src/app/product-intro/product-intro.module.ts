import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductIntroComponent } from './product-intro.component';
import { ProductIntroModule as CxProductIntroModule } from '@spartacus/storefront';
import { ConfigModule } from '@spartacus/core';
import { NgxBarcodeModule } from 'ngx-barcode';


@NgModule({
  declarations: [
    ProductIntroComponent
  ],
  imports: [
    CommonModule,
    CxProductIntroModule,
    NgxBarcodeModule,
    ConfigModule.withConfig({
      cmsComponents: {
        ProductIntroComponent: {
          component: ProductIntroComponent
        }
      }
    })
  ]
})
export class ProductIntroModule { }
