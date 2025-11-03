// public/baremux/index.js
(() => {
  const workerUrl = "https://cdn.jsdelivr.net/npm/@mercuryworkshop/bare-mux/dist/worker.js";

  // Absolute WISP path, same host
  const wisp =
    (typeof window !== "undefined" && window.WISP_URL) ||
    (location.protocol === "https:"
      ? `wss://${location.host}/wisp/`
      : `ws://${location.host}/wisp/`);

  // Prefer WISP; Epoxy fallback
  const clients = [
    { name: "wisp",  type: "wisp",  endpoint: wisp },
    { name: "epoxy", type: "epoxy", endpoint: "/epoxy/" },
  ];

  self.__BAREMUX_CONFIG__ = { workerUrl, clients };
})();
