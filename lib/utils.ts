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
  const basePath = '/neev-foundation'; // This should match next.config.js
  
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  return process.env.NODE_ENV === 'production' 
    ? `${basePath}/${cleanPath}`
    : `/${cleanPath}`;
}