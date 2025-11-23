import { Component, Input } from '@angular/core';
import { ProductTypeInCart } from '../../types/product';
import { ProductItem } from "../product-item/product-item";

@Component({
  selector: 'app-product-list',
  imports: [ProductItem],
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss',
})
export class ProductList {

  @Input() products: ProductTypeInCart[] = [];

}
