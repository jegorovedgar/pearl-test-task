import { Component } from '@angular/core';
import { ImageGroup, ImageType, Product, ProductScope, ProductService } from '@spartacus/core';
import { BarcodeFormat } from '@zxing/library';
import { Observable, Subject } from 'rxjs';
import { distinctUntilChanged, map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-barcode-modal',
  templateUrl: './barcode-modal.component.html',
  styleUrls: ['./barcode-modal.component.scss']
})
export class BarcodeModalComponent {
  public scanResult$: Observable<string>;
  public product$: Observable<Product>;
  public productImage$: Observable<ImageGroup | undefined>;
  public isLoading$: Observable<boolean>;
  public hasError$: Observable<boolean>
  public formatsEnabled = [BarcodeFormat.CODE_128];
  private scanSuccessEvent$ = new Subject<string>();
  private scope = ProductScope.LIST;
  constructor(private productService: ProductService) {
    this.scanResult$ = this.scanSuccessEvent$.asObservable().pipe(distinctUntilChanged());
    this.product$ = this.scanResult$.pipe(
      switchMap((scanResult) => this.productService.get(scanResult, this.scope)),
    );
    this.productImage$ = this.product$.pipe(
      map((product) => product.images?.[ImageType.PRIMARY]),
      map((group) => Array.isArray(group) ? group[0] : group)
    )
    this.isLoading$ = this.scanResult$.pipe(
      switchMap((scanResult) => this.productService.isLoading(scanResult, this.scope))
    );
    this.hasError$ = this.scanResult$.pipe(
      switchMap((scanResult) => this.productService.hasError(scanResult, this.scope))
    );
  }

  public scanSuccess(result: string) {
    this.scanSuccessEvent$.next(result);
  }
}
