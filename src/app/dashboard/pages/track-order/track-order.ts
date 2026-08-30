import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlassCard } from '../../components/glass-card/glass-card';

@Component({
  selector: 'app-track-order',
  standalone: true,
  imports: [CommonModule, GlassCard],
  templateUrl: './track-order.html',
  styleUrls: ['./track-order.scss']
})
export class TrackOrder { }