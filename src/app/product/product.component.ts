import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  products: Product[] = [];

  constructor(private productSrv: ProductService) {}

  ngOnInit(): void {
    this.productSrv.getAllProduct();
  }
}
