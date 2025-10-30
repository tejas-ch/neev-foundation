// Cache the basePath to avoid repeated calculations
const BASE_PATH = process.env.NODE_ENV === 'production' ? '/neev-foundation' : '';

// Utility to handle image paths with basePath for GitHub Pages
export function getImagePath(path: string): string {
  // If path already starts with basePath, don't add it again
  if (path.startsWith('/neev-foundation')) {
    return path;
  }
  
  return `${BASE_PATH}${path}`;
}

// Alternative approach: Use Next.js basePath from config
export function getAssetPath(path: string): string {
  // Remove leading slash if present and add it back with basePath
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  
  return `${BASE_PATH}${cleanPath}`;
}

// Cache for processed image data to avoid re-processing
const imageCache = new Map<string, string>();

// Process image data for components with caching
export function processImageData<T extends { image: string }>(data: T[]): T[] {
  return data.map(item => {
    if (!imageCache.has(item.image)) {
      imageCache.set(item.image, getAssetPath(item.image));
    }
    return {
      ...item,
      image: imageCache.get(item.image)!
    };
  });
}

// Get CSS background image URL with proper basePath and caching
export function getBackgroundImageUrl(imagePath: string): string {
  const cacheKey = `bg:${imagePath}`;
  if (!imageCache.has(cacheKey)) {
    const fullPath = getAssetPath(imagePath);
    imageCache.set(cacheKey, `url('${fullPath}')`);
  }
  return imageCache.get(cacheKey)!;
}