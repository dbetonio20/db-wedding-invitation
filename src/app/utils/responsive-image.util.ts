/**
 * Utility for managing responsive images based on device type
 */

export type ImageVariant = 'mobile' | 'desktop';

export interface ResponsiveImageConfig {
  /** Base path to the image directory */
  basePath: string;
  /** Image filename (without folder prefix) */
  filename: string;
  /** Mobile breakpoint in pixels (default: 768) */
  mobileBreakpoint?: number;
}

/**
 * Get the current device variant based on screen size and orientation
 */
export function getDeviceVariant(
  mobileBreakpoint: number = 768
): ImageVariant {
  if (typeof window === 'undefined') {
    return 'desktop'; // SSR default
  }

  const isMobile = window.matchMedia(
    `(max-width: ${mobileBreakpoint}px)`
  ).matches;
  const isPortrait = window.matchMedia('(orientation: portrait)').matches;

  return isMobile && isPortrait ? 'mobile' : 'desktop';
}

/**
 * Get the responsive image path based on device type
 * 
 * Example:
 * ```ts
 * getResponsiveImagePath({
 *   basePath: '/images/prenup',
 *   filename: 'hero.jpg'
 * })
 * // Returns: '/images/prenup/mobile/hero.jpg' or '/images/prenup/desktop/hero.jpg'
 * ```
 */
export function getResponsiveImagePath(
  config: ResponsiveImageConfig
): string {
  const variant = getDeviceVariant(config.mobileBreakpoint);
  const { basePath, filename } = config;
  
  // Ensure basePath doesn't end with a slash
  const cleanBasePath = basePath.endsWith('/') 
    ? basePath.slice(0, -1) 
    : basePath;
  
  return `${cleanBasePath}/${variant}/${filename}`;
}

/**
 * Create a responsive image path resolver for a specific base path
 * 
 * Example:
 * ```ts
 * const getPrenupImage = createImageResolver('/images/prenup');
 * const heroPath = getPrenupImage('hero.jpg'); // '/images/prenup/mobile/hero.jpg'
 * ```
 */
export function createImageResolver(basePath: string, mobileBreakpoint?: number) {
  return (filename: string): string => {
    return getResponsiveImagePath({ basePath, filename, mobileBreakpoint });
  };
}
