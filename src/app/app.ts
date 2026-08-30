import { Component, signal } from '@angular/core';
import { DashboardRoutingModule } from "./dashboard/dashboard-routing-module";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DashboardRoutingModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('trial-piece');
}
