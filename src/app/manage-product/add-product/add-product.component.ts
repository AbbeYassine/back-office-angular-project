import {Component, OnInit} from '@angular/core';
import {Product} from "../../shared/models/product";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  product: Product = new Product();

  constructor() {
  }

  ngOnInit() {
  }

  addProduct() {
    console.log(this.product);
  }
}
