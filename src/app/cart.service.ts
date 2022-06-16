import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Product } from './products';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product[] = [];
  itemsChanged = new Subject<Product[]>();

  constructor() { }

  addToCart(product: Product){
    this.items = [...this.items, product];
    this.itemsChanged.next(this.items);
  }

  getItems() {
    this.itemsChanged.subscribe(
      (items) => {
        this.items = items;
      });
      return [...this.items];
  }

  clearCart() {
    this.items = [];
    this.itemsChanged.next([]);
  }
}
