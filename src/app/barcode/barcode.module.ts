import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediaModule, ModalModule, ProductListModule } from '@spartacus/storefront';
import { BarcodeModalComponent } from './barcode-modal/barcode-modal.component';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { RouterModule } from '@angular/router';
import { UrlModule } from '@spartacus/core';
import { BarcodeModalDirective } from './barcode-modal/barcode-modal.directive';



@NgModule({
  declarations: [
    BarcodeModalComponent,
    BarcodeModalDirective
  ],
  imports: [
    CommonModule,
    ModalModule,
    RouterModule,
    UrlModule,
    MediaModule,
    ZXingScannerModule
  ],
  exports: [
    BarcodeModalDirective
  ]
})
export class BarcodeModule { }
