import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Product } from './../../models/product.model';

import { environment } from './../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  getAllProducts() {
    return this.http.get<Product[]>(`${environment.URL_API}/products`);
  }

  getProduct(id: string) {
    return this.http.get<Product>(`${environment.URL_API}/products/${id}`);
  }

  createProduct(product: Product) {
    return this.http.post(`${environment.URL_API}/products`, product);
  }

  updateProduct(id: string, changes: Partial<Product>) {
    return this.http.put(`${environment.URL_API}/products/${id}`, changes);
  }

  deleteProduct(id: string) {
    return this.http.delete(`${environment.URL_API}/products/${id}`);
  }
}
