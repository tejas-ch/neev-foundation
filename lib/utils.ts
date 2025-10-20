// Utility to handle image paths with basePath for GitHub Pages
export function getImagePath(path: string): string {
  // In production (GitHub Pages), prefix with basePath
  // In development, use as-is
  const basePath = process.env.NODE_ENV === 'production' ? '/neev-foundation' : '';
  
  // If path already starts with basePath, don't add it again
  if (path.startsWith('/neev-foundation')) {
    return path;
  }
  
  return `${basePath}${path}`;
}

// Alternative approach: Use Next.js basePath from config
export function getAssetPath(path: string): string {
  const basePath = process.env.NODE_ENV === 'production' ? '/neev-foundation' : '';
  
  // Remove leading slash if present and add it back with basePath
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  
  return `${basePath}${cleanPath}`;
}

// Process image data for components
export function processImageData<T extends { image: string }>(data: T[]): T[] {
  return data.map(item => ({
    ...item,
    image: getAssetPath(item.image)
  }));
}

// Get CSS background image URL with proper basePath
export function getBackgroundImageUrl(imagePath: string): string {
  const fullPath = getAssetPath(imagePath);
  return `url('${fullPath}')`;
}