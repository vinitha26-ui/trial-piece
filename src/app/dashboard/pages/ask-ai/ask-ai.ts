import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlassCard } from '../../components/glass-card/glass-card';

@Component({
  selector: 'app-ask-ai',
  standalone: true,
  imports: [CommonModule, GlassCard],
  templateUrl: './ask-ai.html',
  styleUrls: ['./ask-ai.scss']
})
export class AskAi { }