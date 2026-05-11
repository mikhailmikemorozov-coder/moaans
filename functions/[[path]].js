export async function onRequest(context) {
  // Try to serve existing static asset (JS, CSS, images, etc.)
  try {
    const response = await context.env.ASSETS.fetch(context.request);
    if (response.ok || response.redirected) {
      return response;
    }
  } catch (_) {}

  // SPA fallback: serve index.html with 200 for all unknown routes
  return context.env.ASSETS.fetch(
    new Request(new URL('/', context.request.url))
  );
}
