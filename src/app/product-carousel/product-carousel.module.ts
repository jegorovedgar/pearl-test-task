import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCarouselComponent } from './product-carousel.component';
import { ConfigModule, I18nModule, OccProductAdapter, UrlModule } from '@spartacus/core';
import { CarouselModule, MediaModule, StarRatingModule } from '@spartacus/storefront';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ProductCarouselComponent
  ],
  imports: [
    CommonModule,
    CarouselModule,
    MediaModule,
    RouterModule,
    UrlModule,
    I18nModule,
    StarRatingModule,
    ConfigModule.withConfig({
      cmsComponents: {
        ProductCarouselComponent: {
          component: ProductCarouselComponent
        },
      },
    }),
  ]
})
export class ProductCarouselModule { }
