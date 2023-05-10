import { useState, useEffect } from "react";

export default function useFavicon(url) {
  const [favicon, setFavicon] = useState(null);

  useEffect(() => {
    const getFavicon = async () => {
      try {
        const response = await fetch(`/api/fetch?url=${url}`);
        const html = await response.text();
        const domParser = new DOMParser();
        const doc = domParser.parseFromString(html, "text/html");
        const faviconElement =
          doc.querySelector("link[rel='shortcut icon']") ||
          doc.querySelector("link[rel='icon']");

        if (faviconElement !== null) {
          setFavicon(faviconElement.href);
        } else {
          const faviconUrl = new URL(url);
          setFavicon(
            `${faviconUrl.protocol}//${faviconUrl.hostname}/favicon.ico`
          );
        }
      } catch (error) {
        console.error(error);
        setFavicon(null);
      }
    };

    getFavicon();
  }, [url]);

  return favicon;
}
