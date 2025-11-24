import { Component, Input, ViewEncapsulation } from '@angular/core';
import { ProductType } from '../../types/product';
import { CartService } from '../../services/cart';

@Component({
  selector: 'app-add-to-cart',
  imports: [],
  templateUrl: './add-to-cart.html',
  styleUrl: './add-to-cart.scss',
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AddToCart {
  @Input() product!: ProductType;

  constructor(private cartService: CartService) {}

  handleAddProduct(v: number = 1) {
    this.cartService.addProduct(this.product, v);
    console.log("Product to add:", this.product);
  }

  get quantity() {
    return this.cartService.getQuantity(this.product.id);
  }

}
