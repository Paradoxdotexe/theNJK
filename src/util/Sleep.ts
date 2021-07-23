/**
 * Helper function for synchronously sleeping.
 * @param duration Sleep duration in milliseconds.
 */
export default function Sleep(duration: number): Promise<void> {
  return new Promise(resolve => {
    setTimeout(resolve, duration);
  });
}
