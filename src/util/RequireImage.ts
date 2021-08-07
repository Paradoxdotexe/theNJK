/**
 * Function used to dynamically import an image with an optional fallback image in case it doesn't exist.
 */
export default function RequireImage(path: string, fallbackPath: string | null = null): string {
  try {
    return require(`@/assets/images${path}.jpg`);
  } catch {
    try {
      return require(`@/assets/images${path}.png`);
    } catch {
      if (fallbackPath) {
        return require(`@/assets/images${fallbackPath}`);
      }
      return '';
    }
  }
}
