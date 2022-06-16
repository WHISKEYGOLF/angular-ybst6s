import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  items = this.cartService.getItems();

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {}

  emptyCart() {
    this.cartService.clearCart();
    this.router.navigate(['/']);
  }

  purhcase() {
    // ..
  }
}
