import { Component} from '@angular/core';
import {FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';
import {ProductService}  from '../../services/product-service.service';
@Component({
  selector: 'app-search',
  providers: [ProductService],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  formModel: FormGroup;
  categories: string[];

  constructor(private productService: ProductService) {
    this.categories = this.productService.getAllCategories();

    const fb = new FormBuilder();
    this.formModel = fb.group({
      'title': [null,   Validators.minLength(3)],//Validators.required,
      'price': [null, positiveNumberValidator],
      'category': [-1]
    })
  }

  onSearch() {
    if (this.formModel.valid) {
      //что то делаем с данными из формы
      console.log(this.formModel.value);
    }
  }
}

function positiveNumberValidator(control: FormControl): any { 
  if (!control.value) return null;
  const price = parseInt(control.value);

  return price === null ||
    typeof price === 'number' &&
         price > 0 ? null : {positivenumber: true};
}
