import {
  Component,
  ChangeDetectionStrategy,
  signal,
  computed,
  inject,
  PLATFORM_ID,
  HostListener,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

interface GalleryImage {
  src: string;
  alt: string;
  span?: 'tall' | 'wide';
}

@Component({
  selector: 'app-gallery',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './gallery.html',
  styleUrl: './gallery.css',
})
export class Gallery {
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  protected readonly images: GalleryImage[] = [
    { src: '/images/prenup/prenup-1.jpg', alt: 'Prenup photo 1', span: 'tall' },
    { src: '/images/prenup/prenup-2.jpg', alt: 'Prenup photo 2' },
    { src: '/images/prenup/prenup-3.jpg', alt: 'Prenup photo 3' },
    { src: '/images/prenup/prenup-4.jpg', alt: 'Prenup photo 4', span: 'wide' },
    { src: '/images/prenup/prenup-5.jpg', alt: 'Prenup photo 5' },
    { src: '/images/prenup/prenup-6.jpg', alt: 'Prenup photo 6', span: 'tall' },
    { src: '/images/prenup/prenup-7.jpg', alt: 'Prenup photo 7' },
    { src: '/images/prenup/prenup-8.jpg', alt: 'Prenup photo 8' },
    { src: '/images/prenup/prenup-9.jpg', alt: 'Prenup photo 9' },
  ];

  /* ── Lightbox state ── */
  protected readonly lightboxIndex = signal(-1);
  protected readonly lightboxOpen = computed(() => this.lightboxIndex() >= 0);
  protected readonly lightboxImage = computed(() => {
    const i = this.lightboxIndex();
    return i >= 0 ? this.images[i] : null;
  });
  protected readonly lightboxCounter = computed(() => {
    const i = this.lightboxIndex();
    return i >= 0 ? `${i + 1} / ${this.images.length}` : '';
  });

  /* ── Touch / swipe tracking ── */
  private touchStartX = 0;
  private touchStartY = 0;

  openLightbox(index: number): void {
    this.lightboxIndex.set(index);
    if (this.isBrowser) {
      document.body.style.overflow = 'hidden';
    }
  }

  closeLightbox(): void {
    this.lightboxIndex.set(-1);
    if (this.isBrowser) {
      document.body.style.overflow = '';
    }
  }

  prev(): void {
    const i = this.lightboxIndex();
    this.lightboxIndex.set(i > 0 ? i - 1 : this.images.length - 1);
  }

  next(): void {
    const i = this.lightboxIndex();
    this.lightboxIndex.set(i < this.images.length - 1 ? i + 1 : 0);
  }

  /* ── Keyboard navigation ── */
  @HostListener('document:keydown', ['$event'])
  onKeydown(e: KeyboardEvent): void {
    if (!this.lightboxOpen()) return;
    switch (e.key) {
      case 'Escape':
        this.closeLightbox();
        break;
      case 'ArrowLeft':
        this.prev();
        break;
      case 'ArrowRight':
        this.next();
        break;
    }
  }

  /* ── Swipe support ── */
  onTouchStart(e: TouchEvent): void {
    this.touchStartX = e.changedTouches[0].clientX;
    this.touchStartY = e.changedTouches[0].clientY;
  }

  onTouchEnd(e: TouchEvent): void {
    const dx = e.changedTouches[0].clientX - this.touchStartX;
    const dy = e.changedTouches[0].clientY - this.touchStartY;
    // Only count horizontal swipes (ignore vertical scroll gestures)
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) {
      dx > 0 ? this.prev() : this.next();
    }
  }

  onBackdropClick(e: MouseEvent): void {
    if ((e.target as HTMLElement).classList.contains('lightbox')) {
      this.closeLightbox();
    }
  }
}
