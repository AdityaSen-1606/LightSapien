import { useState, useEffect } from 'react';

export const useFetchChapters = (bookId: string) => {
  const [chapters, setChapters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!bookId) return;

    fetch(`http://52.195.171.228:8080/books/${bookId}/`)
      .then(response => response.json())
      .then(data => {
        setChapters(data.chapter_ids);
        setLoading(false);
      })
      .catch(error => console.error('Error fetching chapters:', error));
  }, [bookId]);

  return { chapters, loading };
};
