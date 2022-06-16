import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Price, CartService } from '../cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css'],
})
export class ShippingComponent implements OnInit {
  shippingCost$!: Observable<Price[]>;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.shippingCost$ = this.cartService.getShippingPrices();
  }
}
