export async function onRequest({ request, env }) {
  const url = new URL(request.url);

  // Try to serve existing static asset first
  const assetResponse = await env.ASSETS.fetch(request);
  if (assetResponse.status !== 404) {
    return assetResponse;
  }

  // For unknown paths — serve index.html with 200 (SPA routing)
  const indexResponse = await env.ASSETS.fetch(new URL('/', url));
  return new Response(indexResponse.body, {
    status: 200,
    headers: indexResponse.headers,
  });
}
