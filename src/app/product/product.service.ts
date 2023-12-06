import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product, Roles } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    // return this.http.get<Product[]>('https://fakestoreapi.com/products?sort=desc');
    return this.http.get<Product[]>('http://localhost:8080/account/users/getAll');
  }

  getRoles(): Observable<Roles[]> {
    // return this.http.get<Product[]>('https://fakestoreapi.com/products?sort=desc');
    return this.http.get<Roles[]>('http://localhost:8080/account/roles/getAll');
  }
  
  addEditProduct(postData: any, selectedPdt: any){
    if(!selectedPdt){
      return this.http.post('http://localhost:8080/account/users/add', postData);
    } else {
      return this.http.put(`http://localhost:8080/account/users/edit/${selectedPdt.id}`, postData);
    }
  }

  deleteProduct(productId: number){
    return this.http.delete(`http://localhost:8080/account/users/${productId}`)
}
}