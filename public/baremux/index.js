/* public/baremux/index.js
   Minimal bootstrap: point BareMux at a CDN worker and register clients. */

(() => {
  // Pick a BareMux worker hosted on a CDN (works without bundling)
  // Try jsDelivr first; swap to unpkg if you prefer.
  const workerUrl =
    "https://cdn.jsdelivr.net/npm/@mercuryworkshop/bare-mux/dist/worker.js";

  // Default WISP endpoint if you didn't set window.WISP_URL earlier
  const wisp =
    (typeof window !== "undefined" && window.WISP_URL) ||
    (location.protocol === "https:"
      ? `wss://${location.host}/wisp/`
      : `ws://${location.host}/wisp/`);

  // Priority-ordered transport clients for the worker to use
  const clients = [
    { name: "epoxy", type: "epoxy", endpoint: "/epoxy/" }, // your /epoxy/ static
    { name: "wisp", type: "wisp", endpoint: wisp },        // your /wisp/ route
  ];

  // Expose config for the worker to read at startup
  self.__BAREMUX_CONFIG__ = { workerUrl, clients };
})();
