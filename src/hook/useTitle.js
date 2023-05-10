import { useState, useEffect } from "react";

export default function useTitle(url) {
  const [title, setTitle] = useState(null);

  useEffect(() => {
    const getTitle = async () => {
      const response = await fetch(url);
      const html = await response.text();
      const match = html.match(/<title>(.*?)<\/title>/);
      setTitle(match ? match[1] : null);
    };

    getTitle();
  }, [url]);

  return title;
}
