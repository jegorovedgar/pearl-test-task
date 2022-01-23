import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CurrentProductService } from '@spartacus/storefront';
import { distinctUntilChanged, filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-product-intro',
  templateUrl: './product-intro.component.html',
  styleUrls: ['./product-intro.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductIntroComponent implements OnInit {
  public barcodeValue$ = this.currentProductService.getProduct().pipe(
    map((product) => product?.code),
    distinctUntilChanged(),
  )
  constructor(private currentProductService: CurrentProductService) {}

  ngOnInit(): void {
  }

}
