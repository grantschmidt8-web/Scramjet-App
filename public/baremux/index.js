// Minimal BareMux config that prefers WISP, with CDN worker.
// Put this file at: public/baremux/index.js
(() => {
  const workerUrl = "https://cdn.jsdelivr.net/npm/@mercuryworkshop/bare-mux/dist/worker.js";

  const wisp =
    (typeof window !== "undefined" && window.WISP_URL) ||
    (location.protocol === "https:"
      ? `wss://${location.host}/wisp/`
      : `ws://${location.host}/wisp/`);

  // Prefer WISP first; Epoxy as fallback
  const clients = [
    { name: "wisp",  type: "wisp",  endpoint: wisp },
    { name: "epoxy", type: "epoxy", endpoint: "/epoxy/" },
  ];

  self.__BAREMUX_CONFIG__ = { workerUrl, clients };
})();
