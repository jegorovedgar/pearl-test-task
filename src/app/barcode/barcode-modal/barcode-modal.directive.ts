import { Directive, HostListener } from '@angular/core';
import { ModalService } from '@spartacus/storefront';
import { BarcodeModalComponent } from './barcode-modal.component';

@Directive({
  selector: '[appBarcodeModal]'
})
export class BarcodeModalDirective {
  constructor(private modalService: ModalService) { }

  @HostListener('click', ['$event'])
  public onCLick(event: MouseEvent) {
    event.preventDefault()
    this.modalService.open(BarcodeModalComponent)
  }
}
