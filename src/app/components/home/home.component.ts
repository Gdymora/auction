import { Component, ViewEncapsulation} from '@angular/core';
import {Product, ProductService} from '../../services/product-service.service';
import {FormControl} from '@angular/forms';
import { FilterPipe } from '../../pipes/filter.pipe';
//import 'rxjs/add/operator/debounceTime';
import { debounceTime, map } from 'rxjs/operators';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None//Не надайте інкапсуляцію шаблону чи стилю.
})
export class HomeComponent{

  products: Product[] = [];
  titleFilter: FormControl = new FormControl();//отслеживает контролирует значение формы
  filterCriteria: string;

  constructor(private productService: ProductService) {
    this.products = this.productService.getProducts();
    this.titleFilter.valueChanges.pipe(
         debounceTime(100)
      ).subscribe(
        value => this.filterCriteria = value,
        error => console.error(error));
  }

}
