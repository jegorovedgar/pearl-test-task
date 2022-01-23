import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBoxComponent } from './search-box.component';
import { ConfigModule,  } from '@spartacus/core';
import { SearchBoxModule as CxSearchBoxModule } from '@spartacus/storefront';
import { BarcodeModule } from '../barcode/barcode.module';



@NgModule({
  declarations: [
    SearchBoxComponent
  ],
  imports: [
    CommonModule,
    CxSearchBoxModule,
    BarcodeModule,
    ConfigModule.withConfig({
      cmsComponents: {
        SearchBoxComponent: {
          component: SearchBoxComponent
        }
      }
    })
  ]
})
export class SearchBoxModule { }
