import { Component, ChangeDetectionStrategy } from '@angular/core';

export interface ColorSwatch {
  readonly name: string;
  readonly hex: string;
  readonly gradient: string;
  readonly ariaLabel: string;
}

export interface AttireGuideline {
  readonly role: string;
  readonly recommendation: string;
}

@Component({
  selector: 'app-wedding-details',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './wedding-details.html',
  styleUrl: './wedding-details.css',
})
export class WeddingDetails {
  protected readonly swatches: readonly ColorSwatch[] = [
    {
      name: 'Dusty Rose',
      hex: '#C9A4A0',
      gradient: 'linear-gradient(145deg, #d8b2ae 0%, #C9A4A0 100%)',
      ariaLabel: 'Dusty rose color swatch #C9A4A0',
    },
    {
      name: 'Rose Gold',
      hex: '#B8918C',
      gradient: 'linear-gradient(145deg, #c7a19c 0%, #B8918C 100%)',
      ariaLabel: 'Rose gold color swatch #B8918C',
    },
    {
      name: 'Champagne',
      hex: '#E8D5C4',
      gradient: 'linear-gradient(145deg, #f5e6d8 0%, #E8D5C4 100%)',
      ariaLabel: 'Champagne beige color swatch #E8D5C4',
    },
  ];

  protected readonly attireGuidelines: readonly AttireGuideline[] = [
    {
      role: 'Gentlemen',
      recommendation: 'Formal Barong Tagalog, Suit & Tie, or Tuxedo in neutral, navy, or earth tones.',
    },
    {
      role: 'Ladies',
      recommendation: 'Long formal gowns or elegant midi dresses in the wedding motif colors or soft neutrals.',
    },
  ];
}
