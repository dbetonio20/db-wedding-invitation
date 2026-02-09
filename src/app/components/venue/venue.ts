import { Component, ChangeDetectionStrategy, inject, PLATFORM_ID, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-venue',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './venue.html',
  styleUrl: './venue.css',
})
export class Venue {
  protected readonly isBrowser = signal(isPlatformBrowser(inject(PLATFORM_ID)));
}
