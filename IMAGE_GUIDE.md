# Responsive Image Guide

## Overview
This project uses a folder-based responsive image system that automatically serves optimized images based on device type. Simply place images in the `mobile/` or `desktop/` folders, and the system handles the rest.

## Folder Structure

```
/public/images/prenup/
├── mobile/          # Portrait images for mobile devices
│   ├── hero.jpg
│   └── (other images)
└── desktop/         # Landscape images for desktop/tablets
    ├── hero.jpg
    └── (other images)
```

### When Each Folder is Used
- **`mobile/`**: Used when viewport width ≤ 768px AND orientation is portrait
- **`desktop/`**: Used for all other cases (desktop, tablets in landscape, etc.)

## Adding New Images

### Quick Start
1. **Prepare two versions of your image:**
   - Portrait version → save to `/public/images/prenup/mobile/`
   - Landscape version → save to `/public/images/prenup/desktop/`

2. **Use the same filename in both folders** (e.g., `hero.jpg`)

3. **Reference it in your component** - the system automatically picks the right one

### Example
```
/public/images/prenup/mobile/hero.jpg     (portrait: 1080×1920px)
/public/images/prenup/desktop/hero.jpg    (landscape: 1920×1080px)
```

## Using Responsive Images in Components

### Method 1: Using the Utility Function (Recommended)
```typescript
import { getResponsiveImagePath } from '../../utils/responsive-image.util';

export class MyComponent {
  protected backgroundImage = signal<string>(
    getResponsiveImagePath({
      basePath: '/images/prenup',
      filename: 'hero.jpg'
    })
  );
}
```

### Method 2: Using the Service (For Multiple Images)
```typescript
import { ResponsiveImageService } from '../../services/responsive-image.service';

export class MyComponent {
  private imageService = inject(ResponsiveImageService);
  
  protected backgroundImage = this.imageService.createResponsiveImage({
    basePath: '/images/prenup',
    filename: 'hero.jpg'
  });
}
```

### Method 3: Create Custom Resolver (For Same Folder)
```typescript
import { createImageResolver } from '../../utils/responsive-image.util';

export class MyComponent {
  private getPrenupImage = createImageResolver('/images/prenup');
  
  protected heroImage = signal(this.getPrenupImage('hero.jpg'));
  protected aboutImage = signal(this.getPrenupImage('about.jpg'));
}
```

## Current Implementation

### Hero Component Example
The Hero component demonstrates the pattern:
- Images automatically switch between mobile/desktop
- Reactive updates on window resize
- SSR-safe with proper browser detection
- Simple filename configuration

## Image Specifications

### Mobile (Portrait)
- **Folder**: `/public/images/prenup/mobile/`
- **Aspect Ratio**: 9:16 (portrait)
- **Minimum Resolution**: 1080×1920px
- **Recommended Resolution**: 1284×2778px
- **File Format**: JPEG (optimized) or WebP
- **File Size**: ≤ 300KB (compressed)
- **Subject Positioning**: Center, keeping subjects in the middle third

### Desktop (Landscape)
- **Folder**: `/public/images/prenup/desktop/`
- **Aspect Ratio**: 16:9 or wider
- **Minimum Resolution**: 1920×1080px
- **Recommended Resolution**: 2560×1440px (for high-DPI displays)
- **File Format**: JPEG (optimized) or WebP
- **File Size**: ≤ 500KB (compressed)
- **Subject Positioning**: Center or center-left

## Benefits of Folder-Based System

✅ **Easy to Add Images**: Just drop files in the right folder
✅ **Consistent Naming**: Same filename in both folders
✅ **Scalable**: Add as many images as needed
✅ **Clean Organization**: Clear separation between variants
✅ **No Naming Conventions**: No need for suffixes like `-mobile` or `-desktop`
✅ **Reusable**: Same pattern works for any component

## Image Optimization Tips

### Compression
- Use tools like TinyJPG, ImageOptim, or Squoosh
- Target quality: 80-85% for JPEG
- Consider WebP format for better compression (with JPEG fallback)

### Responsive Considerations
- Always provide both mobile and desktop variants with the same filename
- Test on actual devices to ensure proper framing
- Consider safe zones where important content should stay visible
- Use `object-fit: cover` mindset when cropping original photos

### Performance
- Lazy load images below the fold
- Hero images should load as fast as possible (above the fold)
- Consider using blur-up placeholders for better perceived performance
- Optimize images before adding to project

## Advanced Configuration

### Custom Mobile Breakpoint
```typescript
getResponsiveImagePath({
  basePath: '/images/backgrounds',
  filename: 'custom.jpg',
  mobileBreakpoint: 992  // Use 992px instead of default 768px
})
```

## Adding More Image Categories

Create new folders for different image types:
```
/public/images/
├── prenup/
│   ├── mobile/
│   └── desktop/
├── ceremony/
│   ├── mobile/
│   └── desktop/
└── reception/
    ├── mobile/
    └── desktop/
```

Then use with:
```typescript
getResponsiveImagePath({
  basePath: '/images/ceremony',
  filename: 'venue.jpg'
})
```

## Future Enhancements
- WebP format with JPEG fallback
- Art direction using `<picture>` element
- Automatic image optimization in build pipeline
- Lazy loading with intersection observer
- Progressive image loading with blur-up effect
