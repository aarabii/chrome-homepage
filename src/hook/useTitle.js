import { useState, useEffect } from "react";

export default function useTitle(url) {
  const [title, setTitle] = useState(null);

  useEffect(() => {
    const getTitle = async () => {
      try {
        const response = await fetch(`/api/fetch?url=${url}`);
        const html = await response.text();
        const match = html.match(/<title>(.*?)<\/title>/);
        setTitle(match ? match[1] : "Untitled");
      } catch (error) {
        setTitle("Untitled");
      }
    };

    getTitle();
  }, [url]);

  return title;
}
