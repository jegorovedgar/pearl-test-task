import { Component } from '@angular/core';
import { ProductCarouselComponent as CxProductCarouselComponent} from '@spartacus/storefront';

@Component({
  selector: 'app-product-carousel',
  templateUrl: './product-carousel.component.html',
  styleUrls: ['./product-carousel.component.scss']
})
export class ProductCarouselComponent extends CxProductCarouselComponent {}
