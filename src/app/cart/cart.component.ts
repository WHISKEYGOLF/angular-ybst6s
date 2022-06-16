import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  items = this.cartService.getItems();

  checkoutForm = this.formBuilder.group({
    name: '',
    address: '',
  });

  constructor(
    private cartService: CartService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {}

  emptyCart() {
    this.cartService.clearCart();
    this.router.navigate(['/']);
  }

  onSubmit() {
    // process checkout Data
    this.items = this.cartService.getItems();
    // console.warn('Your order has  been sumbitted', this.checkoutForm.value);
    window.alert(
      'Your order has  been sumbitted: ' +
        JSON.stringify(this.checkoutForm.value)
    );
    this.checkoutForm.reset();
    setTimeout(() => {
      this.emptyCart();
    }, 1500);
  }
}
