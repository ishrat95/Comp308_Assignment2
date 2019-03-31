// Student Name: Ishratben Vahora
// StudentID: 300986257
// Date: 2019-03-30
import { Component, OnInit } from '@angular/core';
import { BasePageComponent } from 'src/app/partials/base-page/base-page.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent extends BasePageComponent implements OnInit {

  constructor(route: ActivatedRoute) {
    super(route);
   }

  ngOnInit() {
  }

}
