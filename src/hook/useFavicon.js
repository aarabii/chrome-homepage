import { useState, useEffect } from "react";

export default function useFavicon(url) {
  const [favicon, setFavicon] = useState(null);

  useEffect(() => {
    const getFavicon = () => {
      const faviconElement =
        document.querySelector("link[rel='shortcut icon']") ||
        document.querySelector("link[rel='icon']");

      if (faviconElement !== null) {
        setFavicon(faviconElement.href);
      } else {
        const faviconUrl = new URL(url);
        setFavicon(
          `${faviconUrl.protocol}//${faviconUrl.hostname}/favicon.ico`
        );
      }
    };

    getFavicon();
  }, [url]);

  return favicon;
}
