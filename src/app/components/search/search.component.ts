import { Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  formModel: FormGroup = new FormGroup({
    'title': new FormControl(),
    'price': new FormControl(),
    'category': new FormControl()
  });

}
