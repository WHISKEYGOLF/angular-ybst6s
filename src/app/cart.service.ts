import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Subject, Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Product } from './products';

export interface Price {
  type: string;
  price: number;
}

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: Product[] = [];
  itemsChanged = new Subject<Product[]>();
  price = new BehaviorSubject<Price | null>(null);
  $currentPrice = this.price.asObservable();

  constructor(private http: HttpClient) {}

  addToCart(product: Product) {
    this.items = [...this.items, product];
    this.itemsChanged.next(this.items);
  }

  getItems() {
    this.itemsChanged.subscribe((items) => {
      this.items = items;
    });
    return [...this.items];
  }

  clearCart() {
    alert('clearing cart ... ');
    this.items = [];
    this.itemsChanged.next([]);
  }

  getShippingPrices() {
    return this.http
      .get<{ type: string; price: number }[]>('/assets/shipping.json')
      .pipe(
        catchError(this.handleError),
        tap((priceData) => {
          alert(JSON.stringify(priceData));
        })
      );
  }

  private handleError(errorRes: HttpErrorResponse): Observable<never> {
    let errorMessage = errorRes.error.error.message;

    if (!errorRes.error || !errorRes.error.error) {
      errorMessage = 'An unknow error occured.';
      return throwError(errorMessage);
    }
    return throwError(errorMessage);
  }
}
