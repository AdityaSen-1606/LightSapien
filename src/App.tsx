import React, { useEffect, useState } from "react";
import { useFetchBooks } from "./hooks/useFetchBook";
import { useFetchChapters } from "./hooks/useFtechChapters";
import { useFetchPages } from "./hooks/useFetchPages";
import BookList from "./components/BookList";
import ChapterList from "./components/ChapterList";
import PageViewer from "./components/PageViewer";

function App() {
  const { books, loading: booksLoading } = useFetchBooks();
const [selectedBookId, setSelectedBookId] = useState<string|null>(null);
  const { chapters, loading: chaptersLoading } = useFetchChapters(
    selectedBookId || "1"
  );
  const [selectedChapterId, setSelectedChapterId] = useState<number | null>(
    null
  );
  const { pages, loading: pagesLoading } = useFetchPages(
    selectedChapterId
  );

  useEffect(()=>{
    setSelectedChapterId(chapters[0])
  },[chapters]);

  if (booksLoading) return <div>Loading books...</div>;
  if (chaptersLoading) return <div>Loading chapters...</div>;

  return (
    <>
      <div className="fixed inset-0 bg-stone-900 flex items-center justify-center">
        <div className="bg-white h-full max-w-2xl w-full p-3">
          <div className="relative flex flex-col items-center">
            <div></div>
            <BookList books={books} onBookSelect={setSelectedBookId} />
            <ChapterList
              chapters={chapters}
              onChapterSelect={setSelectedChapterId}
            />
            <PageViewer pages={pages} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
