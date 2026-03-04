import { Injectable, inject, PLATFORM_ID, OnDestroy } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AudioService implements OnDestroy {
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  /** Whether music is currently playing */
  readonly enabled = signal(false);

  private audio: HTMLAudioElement | null = null;
  private fadeInterval: ReturnType<typeof setInterval> | null = null;

  ngOnDestroy(): void {
    this.destroy();
  }

  /** Toggle music on / off with a smooth fade */
  toggle(): void {
    if (!this.isBrowser) return;
    this.enabled() ? this.stop() : this.play();
  }

  /** Start playback (lazy-creates audio element) */
  play(): void {
    if (!this.isBrowser) return;

    if (!this.audio) {
      this.audio = new Audio();
      this.audio.src = 'music/Tahanan.mp3';
      this.audio.loop = true;
      this.audio.preload = 'none';
      this.audio.volume = 0;
    }

    this.enabled.set(true);
    this.audio.play().then(() => this.fadeVolume(0.4, 800)).catch(() => {
      // Autoplay blocked — revert
      this.enabled.set(false);
    });
  }

  /** Fade out then pause */
  stop(): void {
    this.enabled.set(false);
    if (this.audio) {
      this.fadeVolume(0, 500, () => this.audio?.pause());
    }
  }

  /** Clean up audio resources */
  destroy(): void {
    if (this.fadeInterval) clearInterval(this.fadeInterval);
    if (this.audio) {
      this.audio.pause();
      this.audio.src = '';
      this.audio = null;
    }
  }

  /** Smoothly ramp volume to target over duration (ms) */
  private fadeVolume(target: number, duration: number, onDone?: () => void): void {
    if (!this.audio) return;
    if (this.fadeInterval) clearInterval(this.fadeInterval);

    const step = 30;
    const ticks = Math.max(1, duration / step);
    const delta = (target - this.audio.volume) / ticks;
    let remaining = ticks;

    this.fadeInterval = setInterval(() => {
      if (!this.audio || --remaining <= 0) {
        if (this.audio) this.audio.volume = Math.max(0, Math.min(1, target));
        if (this.fadeInterval) clearInterval(this.fadeInterval);
        this.fadeInterval = null;
        onDone?.();
        return;
      }
      this.audio.volume = Math.max(0, Math.min(1, this.audio.volume + delta));
    }, step);
  }
}
