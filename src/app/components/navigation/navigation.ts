import {
  Component,
  ChangeDetectionStrategy,
  signal,
  inject,
  PLATFORM_ID,
} from '@angular/core';
import { isPlatformBrowser, DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-navigation',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './navigation.html',
  styleUrl: './navigation.css',
  host: {
    '(window:scroll)': 'onScroll()',
  },
})
export class Navigation {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly document = inject(DOCUMENT);

  protected readonly mobileMenuOpen = signal(false);
  protected readonly scrolled = signal(false);

  protected readonly navLinks = [
    { label: 'Our Story', fragment: 'our-story' },
    { label: 'Gallery', fragment: 'gallery' },
    { label: 'Details', fragment: 'wedding-details' },
    { label: 'Venue', fragment: 'venue' },
    { label: 'RSVP', fragment: 'rsvp' },
  ];

  toggleMenu(): void {
    this.mobileMenuOpen.update((open) => !open);
  }

  closeMenu(): void {
    this.mobileMenuOpen.set(false);
  }

  onScroll(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.scrolled.set(window.scrollY > 50);
    }
  }

  scrollTo(fragment: string): void {
    this.closeMenu();
    if (isPlatformBrowser(this.platformId)) {
      const el = this.document.getElementById(fragment);
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
