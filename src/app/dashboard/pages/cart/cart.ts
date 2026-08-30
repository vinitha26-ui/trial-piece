import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlassCard } from '../../components/glass-card/glass-card';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, GlassCard],
  templateUrl: './cart.html',
  styleUrls: ['./cart.scss']
})
export class Cart {
  items = [
    { name: 'Pure Aloe Vera Gel', qty: 2, price: 249 },
    { name: 'Moringa Leaf Powder', qty: 1, price: 199 },
  ];

  get total() {
    return this.items.reduce((sum, i) => sum + i.price * i.qty, 0);
  }
}