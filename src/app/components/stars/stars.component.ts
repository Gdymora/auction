import { Input, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
 // styleUrls: ['./stars.component.css']
styles: ['.starrating { color: #d17581; }']
})
export class StarsComponent implements OnInit {

 
    @Input() count: number = 5; // <1>
    @Input() rating: number = 0; // <2>
    stars: boolean[] = []; // <3>
  
    ngOnInit() { // <4>
      for (let i = 1; i <= this.count; i++) {
        this.stars.push(i > this.rating);
      }
    }
  }
  