import { onMount, createEffect } from "solid-js";
import { useLocation } from "@solidjs/router";

const GoogleAnalytics = () => {
  const location = useLocation();
  const MEASUREMENT_ID = "G-XQGYDR8QWG";

  onMount(() => {
    // Google Analytics スクリプトを動的に追加
    const script1 = document.createElement("script");
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`;
    document.head.appendChild(script1);

    // gtag の初期化スクリプト
    const script2 = document.createElement("script");
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${MEASUREMENT_ID}');
    `;
    document.head.appendChild(script2);
  });

  createEffect(() => {
    // パスが変更されたときに新しいページビューを送信
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("config", MEASUREMENT_ID, {
        page_path: location.pathname,
      });
    }
  });

  return null;
};

export default GoogleAnalytics;
