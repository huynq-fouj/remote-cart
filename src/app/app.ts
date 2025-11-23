import { Component, signal, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Cart } from "./pages/cart/cart";

@Component({
  selector: 'app-root',
  imports: [Cart],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  encapsulation: ViewEncapsulation.ShadowDom
})
export class App {
  protected readonly title = signal('cart');
}
