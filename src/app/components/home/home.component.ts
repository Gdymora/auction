import { Component, ViewEncapsulation} from '@angular/core';
import {Product, ProductService} from '../../services/product-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None//Не надайте інкапсуляцію шаблону чи стилю.
})
export class HomeComponent{

  products: Array<Product> = []; // <1>

  constructor(private productService: ProductService) { // <2>
    this.products = this.productService.getProducts(); // <3>
   // console.log(this.products);
  }

}
