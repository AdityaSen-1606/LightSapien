import { useState, useEffect } from 'react';

export const useFetchPages = (chapterId: string) => {
  const [pages, setPages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!chapterId) return;

    fetch(`http://52.195.171.228:8080/chapters/${chapterId}/`)
      .then(response => response.json())
      .then(data => {
        setPages(data.pages);
        setLoading(false);
      })
      .catch(error => console.error('Error fetching pages:', error));
  }, [chapterId]);

  return { pages, loading };
};
