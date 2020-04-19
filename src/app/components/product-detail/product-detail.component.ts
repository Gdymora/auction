import { Component} from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import {Product, Review, ProductService}  from '../../services/product-service.service';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent  {
  product: Product;
  reviews: Review[];

  constructor(route: ActivatedRoute, productService: ProductService) {

    let prodId: number = parseInt(route.snapshot.params['productId']);
    console.log(prodId);
    this.product = productService.getProductById(prodId);
    this.reviews = productService.getReviewsForProduct(this.product.id);
    console.log(this.reviews);
   }
}
