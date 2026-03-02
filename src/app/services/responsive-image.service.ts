import { Injectable, inject, PLATFORM_ID, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { getResponsiveImagePath, ResponsiveImageConfig } from '../utils/responsive-image.util';

/**
 * Service for managing responsive images across components
 * 
 * Example usage in a component:
 * ```ts
 * export class MyComponent {
 *   private imageService = inject(ResponsiveImageService);
 *   
 *   protected backgroundImage = this.imageService.createResponsiveImage({
 *     basePath: '/images/backgrounds',
 *     filename: 'my-bg.jpg'
 *   });
 * }
 * ```
 */
@Injectable({
  providedIn: 'root',
})
export class ResponsiveImageService {
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  private resizeListeners = new Set<() => void>();

  constructor() {
    if (this.isBrowser) {
      window.addEventListener('resize', () => {
        this.resizeListeners.forEach((listener) => listener());
      });
    }
  }

  /**
   * Creates a reactive signal for a responsive image that updates on resize
   */
  createResponsiveImage(config: ResponsiveImageConfig) {
    const imageSignal = signal(getResponsiveImagePath(config));

    if (this.isBrowser) {
      const updateImage = () => {
        imageSignal.set(getResponsiveImagePath(config));
      };
      this.resizeListeners.add(updateImage);
    }

    return imageSignal;
  }

  /**
   * Get a responsive image path without reactivity
   */
  getImagePath(config: ResponsiveImageConfig): string {
    return getResponsiveImagePath(config);
  }
}
