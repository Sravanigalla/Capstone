import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from './project1/product-list/IProduct';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) { }

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>("http://alphacart.com/products")
  }


 /* getProduct() {
    return this.http.get<any>("http://localhost:5257/api/Product/");
  }

  postProduct(details: any) {
    return this.http.post<any>("http://localhost:5257/api/Product/", details);
  }

  putProdct(details: any) {
    return this.http.put<any>("http://localhost:5257/api/Product/", details)
  }
*/


}


