import { useState, useEffect } from 'react';

export const useFetchBooks = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://52.195.171.228:8080/books/')
      .then(response => response.json())
      .then(data => {
        setBooks(data);
        setLoading(false);
      })
      .catch(error => console.error('Error fetching books:', error));
  }, []);

  return { books, loading };
};
