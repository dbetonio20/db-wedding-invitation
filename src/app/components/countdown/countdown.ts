import {
  Component,
  ChangeDetectionStrategy,
  signal,
  computed,
  OnInit,
  OnDestroy,
  inject,
  PLATFORM_ID,
  NgZone,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-countdown',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './countdown.html',
  styleUrl: './countdown.css',
})
export class Countdown implements OnInit, OnDestroy {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly ngZone = inject(NgZone);
  private intervalId: ReturnType<typeof setInterval> | null = null;

  /** Wedding date: January 25, 2027 at 4:00 PM PHT (UTC+8) */
  private readonly weddingDate = new Date('2027-01-25T16:00:00+08:00');

  protected readonly now = signal(Date.now());

  protected readonly isPast = computed(() => this.now() >= this.weddingDate.getTime());

  protected readonly days = computed(() => {
    const diff = this.weddingDate.getTime() - this.now();
    return diff > 0 ? Math.floor(diff / (1000 * 60 * 60 * 24)) : 0;
  });

  protected readonly hours = computed(() => {
    const diff = this.weddingDate.getTime() - this.now();
    return diff > 0 ? Math.floor((diff / (1000 * 60 * 60)) % 24) : 0;
  });

  protected readonly mins = computed(() => {
    const diff = this.weddingDate.getTime() - this.now();
    return diff > 0 ? Math.floor((diff / (1000 * 60)) % 60) : 0;
  });

  protected readonly secs = computed(() => {
    const diff = this.weddingDate.getTime() - this.now();
    return diff > 0 ? Math.floor((diff / 1000) % 60) : 0;
  });

  protected pad(value: number): string {
    return value.toString().padStart(2, '0');
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.ngZone.runOutsideAngular(() => {
        this.intervalId = setInterval(() => {
          this.ngZone.run(() => {
            this.now.set(Date.now());
          });
        }, 1000);
      });
    }
  }

  ngOnDestroy(): void {
    if (this.intervalId !== null) {
      clearInterval(this.intervalId);
    }
  }
}
