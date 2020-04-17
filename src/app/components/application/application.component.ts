import { Component} from '@angular/core';
import {Product, ProductService} from '../../services/product-service.service';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent{
  products: Array<Product> = []; // <1>

  constructor(private productService: ProductService) { // <2>
    this.products = this.productService.getProducts(); // <3>
   // console.log(this.products);
  }


}
 