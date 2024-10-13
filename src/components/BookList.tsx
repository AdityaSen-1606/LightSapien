import React, { useState } from "react";

interface BookListProps {
  books: any[];
  onBookSelect: (bookId: string) => void;
}

const BookList: React.FC<BookListProps> = ({ books, onBookSelect }) => {
  const [selectedBookId, setSelectedBookId] = useState<string | null>(null);

  const handleBookSelect = (bookId: string) => {
    setSelectedBookId(bookId);
    onBookSelect(bookId);
  }

  return (
    <div className="flex">
      {books.map((book) => (
        <button
          key={book.id}
          onClick={() => handleBookSelect(book.id)}
          className={`px-2 py-0.5 rounded border-2  ${
            selectedBookId === book.id ||
            (selectedBookId === null && book.id === 1)
              ? "bg-teal-800 text-teal-50 border-yellow-600"
              : "bg-zinc-100 text-neutral-800 border-neutral-500"
          }`}
        >
          {book.title}
        </button>
      ))}
    </div>
  );
};

export default BookList;
