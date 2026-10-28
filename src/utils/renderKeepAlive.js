const RENDER_URL = process.env.RENDER_URL;

const INTERVAL = 10 * 60 * 1000; // 10 minutes

export function startKeepAlive() {
  if (process.env.NODE_ENV !== "production") {
    console.log("Keep-alive disabled outside production.");
    return;
  }

  if (!RENDER_URL) {
    console.log("RENDER_URL is not configured.");
    return;
  }

  setInterval(async () => {
    try {
      const response = await fetch(RENDER_URL, {
        signal: AbortSignal.timeout(30_000),
      });

      console.log(
        `[Keep-alive] ${new Date().toISOString()} Status: ${response.status}`,
      );
    } catch (error) {
      console.error("[Keep-alive] Request failed:", error.message);
    }
  }, INTERVAL);

  console.log("Keep-alive scheduler started.");
}
