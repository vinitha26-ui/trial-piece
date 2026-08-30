import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlassCard } from '../../components/glass-card/glass-card';

interface Cert {
  icon: string;
  name: string;
  description: string;
}

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [CommonModule, GlassCard],
  templateUrl: './certifications.html',
  styleUrls: ['./certifications.scss']
})
export class Certifications {
  certifications: Cert[] = [
    { icon: '✓', name: 'FSSAI Certified', description: 'Licensed food safety authority of India' },
    { icon: '🌿', name: '100% Organic', description: 'No pesticides, no synthetic additives' },
    { icon: '🔬', name: 'Lab Tested', description: 'Every batch tested for purity and safety' },
  ];
}