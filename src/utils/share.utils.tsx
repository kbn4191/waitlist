
// utils/share.ts
export interface ShareOptions {
  title?: string;
  text?: string;
  url?: string;
  files?: File[];
}

/**
 * Attempts to share using the Web Share API.
 * Returns true if the share dialog was opened, false otherwise.
 *
 * Usage:
 *   await shareContent({ title: 'Hello', url: 'https://example.com' });
 */
export async function shareContent(options: ShareOptions): Promise<boolean> {
  // Guard: API not available (SSR, old browsers, etc.)
  if (typeof navigator === "undefined" || !navigator.share) {
    console.warn("Web Share API not supported in this environment.");
    return false;
  }

  // Guard: files not supported (Firefox/desktop, etc.)
  if (options.files && !navigator.canShare?.({ files: options.files })) {
    console.warn("This browser cannot share files.");
    return false;
  }

  try {
    await navigator.share(options);
    return true; // user saw native share sheet
  } catch (err: any) {
    // AbortError === user dismissed the sheet
    if (err?.name !== "AbortError") {
      console.error("Sharing failed:", err);
    }
    return false;
  }
}
