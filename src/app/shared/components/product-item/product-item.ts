import { Component, Input } from '@angular/core';
import { ProductTypeInCart } from '../../types/product';
import { CartService } from '../../services/cart';
import { CurrencyFormatPipe } from "../../pipes/currency-format-pipe";

@Component({
  selector: 'app-product-item',
  imports: [CurrencyFormatPipe],
  templateUrl: './product-item.html',
  styleUrl: './product-item.scss',
})
export class ProductItem {

  @Input() product!: ProductTypeInCart;

  constructor(private cartService: CartService) {}

  handleAddProduct(value: number = 1) {
    this.cartService.addProduct(this.product, value);
  }

}
