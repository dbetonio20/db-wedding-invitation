import {
  Component,
  ChangeDetectionStrategy,
  signal,
  inject,
  PLATFORM_ID,
  OnDestroy,
  afterNextRender,
  output,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { AudioService } from '../../services/audio.service';

export interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  duration: number;
  delay: number;
  drift: number;
  rotation: number;
  type: 'petal' | 'bokeh';
}

export interface Sparkle {
  id: number;
  angle: number;
  distance: number;
  delay: number;
  size: number;
}

@Component({
  selector: 'app-envelope-landing',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './envelope-landing.html',
  styleUrl: './envelope-landing.css',
})
export class EnvelopeLanding implements OnDestroy {
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  protected readonly audioService = inject(AudioService);

  // ── Animation state ──────────────────────────────────
  protected readonly isOpening    = signal(false);
  protected readonly sealShattered = signal(false);
  protected readonly flapOpen      = signal(false);
  protected readonly cardVisible   = signal(false);
  protected readonly cardExpanding = signal(false);
  protected readonly isRevealed    = signal(false);
  protected readonly isHovering    = signal(false);

  // ── Output: fires when scene has fully exited ─────────
  readonly revealed = output<void>();

  // ── Particle / sparkle data ───────────────────────────
  protected readonly particles = signal<Particle[]>([]);
  protected readonly sparkles  = signal<Sparkle[]>([]);

  // ── Parallax ─────────────────────────────────────────
  protected readonly mouseX = signal(0);
  protected readonly mouseY = signal(0);

  private mouseMoveHandler?: (e: MouseEvent) => void;
  private deviceOrientationHandler?: (e: DeviceOrientationEvent) => void;
  private keydownHandler?: (e: KeyboardEvent) => void;
  private timers: ReturnType<typeof setTimeout>[] = [];

  constructor() {
    afterNextRender(() => {
      this.buildParticles();
      this.bindGlobalEvents();
    });
  }

  ngOnDestroy(): void {
    if (!this.isBrowser) return;
    if (this.mouseMoveHandler)
      window.removeEventListener('mousemove', this.mouseMoveHandler);
    if (this.deviceOrientationHandler)
      window.removeEventListener('deviceorientation', this.deviceOrientationHandler as EventListener);
    if (this.keydownHandler)
      window.removeEventListener('keydown', this.keydownHandler);
    this.timers.forEach(clearTimeout);
  }

  // ── Particle generation ───────────────────────────────
  private buildParticles(): void {
    const list: Particle[] = [];
    for (let i = 0; i < 55; i++) {
      list.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 110 + 5,
        size: Math.random() * 14 + 6,
        opacity: Math.random() * 0.45 + 0.2,
        duration: Math.random() * 14 + 10,
        delay: Math.random() * -22,
        drift: (Math.random() - 0.5) * 90,
        rotation: Math.random() * 360,
        type: i % 3 === 0 ? 'bokeh' : 'petal',
      });
    }
    this.particles.set(list);
  }

  private buildSparkles(): void {
    const list: Sparkle[] = [];
    for (let i = 0; i < 22; i++) {
      list.push({
        id: i,
        angle: (i / 22) * 360,
        distance: Math.random() * 80 + 45,
        delay: Math.random() * 0.18,
        size: Math.random() * 6 + 4,
      });
    }
    this.sparkles.set(list);
  }

  // ── Global event bindings ─────────────────────────────
  private bindGlobalEvents(): void {
    if (!this.isBrowser) return;

    // Mouse parallax (desktop)
    this.mouseMoveHandler = (e: MouseEvent) => {
      if (this.isOpening()) return;
      this.mouseX.set((e.clientX / window.innerWidth  - 0.5) * 18);
      this.mouseY.set((e.clientY / window.innerHeight - 0.5) * -12);
    };
    window.addEventListener('mousemove', this.mouseMoveHandler);

    // Gyroscope tilt (mobile)
    this.deviceOrientationHandler = (e: DeviceOrientationEvent) => {
      if (this.isOpening()) return;
      const ry = ((e.beta  ?? 0) - 45) * 0.4;
      const rx =  (e.gamma ?? 0)        * 0.4;
      this.mouseX.set(Math.max(-15, Math.min(15, rx)));
      this.mouseY.set(Math.max(-10, Math.min(10, ry)));
    };
    window.addEventListener('deviceorientation', this.deviceOrientationHandler as EventListener);

    // Keyboard: Enter / Space opens envelope
    this.keydownHandler = (e: KeyboardEvent) => {
      if ((e.key === 'Enter' || e.key === ' ') && !this.isOpening()) {
        e.preventDefault();
        this.openEnvelope();
      }
    };
    window.addEventListener('keydown', this.keydownHandler);
  }

  // ── Mouse enter / leave ───────────────────────────────
  protected onMouseEnter(): void {
    if (!this.isOpening()) this.isHovering.set(true);
  }
  protected onMouseLeave(): void {
    this.isHovering.set(false);
  }

  // ── Core open sequence ────────────────────────────────
  protected openEnvelope(): void {
    if (this.isOpening() || this.isRevealed()) return;

    this.isOpening.set(true);
    this.isHovering.set(false);
    this.buildSparkles();

    // Start music on first user interaction (click/tap satisfies browser autoplay policy)
    if (!this.audioService.enabled()) {
      this.audioService.play();
    }

    // 1. Seal shatters immediately
    this.sealShattered.set(true);

    // 2. Flap swings open (slight delay for drama)
    this.after(550, () => this.flapOpen.set(true));

    // 3. Card slides up out of envelope
    this.after(1250, () => this.cardVisible.set(true));

    // 4. Card expands full-screen
    this.after(2300, () => this.cardExpanding.set(true));

    // 5. Mark scene as exiting
    this.after(3100, () => {
      this.isRevealed.set(true);
      // Let CSS exit animation finish, then notify parent
      this.after(900, () => this.revealed.emit());
    });
  }

  // ── Audio toggle ──────────────────────────────────────
  protected toggleAudio(): void {
    this.audioService.toggle();
  }

  // ── Parallax transform ────────────────────────────────
  protected get envelopeTransform(): string {
    if (this.isOpening()) return 'none';
    return `rotateY(${this.mouseX()}deg) rotateX(${this.mouseY()}deg)`;
  }

  // ── Helpers ───────────────────────────────────────────
  private after(ms: number, fn: () => void): void {
    this.timers.push(setTimeout(fn, ms));
  }
}
