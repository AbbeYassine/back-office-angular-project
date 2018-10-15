import {Component, OnInit} from '@angular/core';
import {Product} from "../../shared/models/product";
import {ProductService} from "../../shared/services/product.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  product: Product = new Product();
  busy: Subscription;


  constructor(private productService: ProductService) {
  }

  ngOnInit() {
  }

  addProduct() {

    this.busy = this.productService.addProduct(this.product)
      .subscribe(
        (data) => {
          console.log(data);
        }
      );

  }
}
