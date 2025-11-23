import { Injectable } from '@angular/core';
import { ProductType, ProductTypeInCart } from '../types/product';
import { BehaviorSubject } from 'rxjs';

const KEY = 'user-cart-products';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private productsSource = new BehaviorSubject<ProductTypeInCart[]>([])
  private loaded: boolean = false;

  constructor() {
    if(!this.loaded) {
      const products: ProductTypeInCart[] = JSON.parse(localStorage.getItem(KEY)!) || [];
      this.productsSource.next([...products]);
      this.loaded = true;
      console.log('Load product: ', products);
    }
  }

  addProduct(product: ProductType, value: number) {
    let products = this.productsSource.getValue();
    const p = products.find(p => product.id === p.id);
    if(!p) {
      products.push({...product, quantity: value});
    } else {
      p.quantity += value;
      if(p.quantity <= 0) {
        products = products.filter(p => p.id !== product.id)
      }
    }

    this.productsSource.next([...products]);
    this.saveProduct();
  }

  getProducts() {
    return this.productsSource.asObservable();
  }

  getQuantity(id: number) {
    return this.productsSource.getValue().find(p => id === p.id)?.quantity ?? 0;
  }

  saveProduct() {
    localStorage.setItem(KEY, JSON.stringify(this.productsSource.getValue()));
  }

}
