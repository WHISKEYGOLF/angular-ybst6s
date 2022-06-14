import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Product, products } from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;
  id!: Number;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    // Find product coresponding with the id provided in route. Output format: {}
    this.product = products.find(p => p.id === productIdFromRoute);
  }

}
