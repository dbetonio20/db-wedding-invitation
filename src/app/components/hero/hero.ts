import {
  Component,
  ChangeDetectionStrategy,
  signal,
  inject,
  PLATFORM_ID,
  effect,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import {
  getResponsiveImagePath,
  createImageResolver,
} from '../../utils/responsive-image.util';

@Component({
  selector: 'app-hero',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  // Image configuration - easily change the image by updating the filename
  private readonly heroImageName = 'hero.jpg';
  private readonly imagePath = '/images/prenup';

  protected readonly backgroundImage = signal<string>(
    this.getResponsiveImagePath()
  );

  constructor() {
    if (this.isBrowser) {
      // Update background image on resize
      effect(() => {
        const handleResize = () => {
          this.backgroundImage.set(this.getResponsiveImagePath());
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
      });
    }
  }

  private getResponsiveImagePath(): string {
    const path = getResponsiveImagePath({
      basePath: this.imagePath,
      filename: this.heroImageName,
    });
    console.log('Hero background image path:', path);
    return path;
  }
}
