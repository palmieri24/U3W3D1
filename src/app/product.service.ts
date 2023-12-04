import { Injectable } from '@angular/core';
import { Product } from './product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  url!: string;
  constructor(private http: HttpClient) {
    this.url = 'https://dummyjson.com/products';
  }

  getAllProduct(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url);
  }
}
