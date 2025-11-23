import { Component, OnInit } from '@angular/core';
import { ProductTypeInCart } from '../../shared/types/product';
import { CartService } from '../../shared/services/cart';
import { ProductList } from "../../shared/components/product-list/product-list";

@Component({
  selector: 'app-cart',
  imports: [ProductList],
  templateUrl: './cart.html',
  styleUrl: './cart.scss',
})
export class Cart implements OnInit {

  products: ProductTypeInCart[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.getProducts().subscribe(products => this.products = products);
  }
}
