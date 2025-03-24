import { onCleanup, createEffect } from "solid-js";
import { useLocation } from "@solidjs/router";

const GoogleAnalytics = () => {
  const location = useLocation();

  createEffect(() => {
    if (window.gtag) {
      window.gtag("config", "G-XQGYDR8QWG", {
        page_path: location.pathname,
      });
    }
  });

  return null;
};

export default GoogleAnalytics;
