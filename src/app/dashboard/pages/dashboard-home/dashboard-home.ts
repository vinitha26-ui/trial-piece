import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlassCard } from '../../components/glass-card/glass-card';
import { PRODUCTS } from '../../../storefront/data/products.mock';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard-home',
  standalone: true,
  imports: [CommonModule, GlassCard, RouterModule],
  templateUrl: './dashboard-home.html',
  styleUrls: ['./dashboard-home.scss']
})
export class DashboardHome {
  products = PRODUCTS;
}