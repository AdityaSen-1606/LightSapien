import React, { useState } from "react";

interface PageViewerProps {
  pages: {
    id: number;
    page_index: number;
    image: {
      id: number;
      file: string;
      width: number;
      height: number;
    };
  }[];
}

const PageViewer: React.FC<PageViewerProps> = ({ pages }) => {
  const [currentPageIndex, setCurrentPageIndex] = useState(0);

  const goToNextPage = () => {
    if (currentPageIndex < pages.length - 1) {
      setCurrentPageIndex(currentPageIndex + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPageIndex > 0) {
      setCurrentPageIndex(currentPageIndex - 1);
    }
  };

  if (!pages || pages.length === 0) {
    return <div>No pages available</div>;
  }

  return (
    <div className="relative flex flex-col items-center">
      <div className="relative h-[85%] w-[85%]">
        <div
          className="absolute left-0 top-0 h-full w-1/2 cursor-pointer"
          onClick={goToPreviousPage}
        />
        <div
          className="absolute right-0 top-0 h-full w-1/2 cursor-pointer"
          onClick={goToNextPage}
        />
        <img
          src={pages[currentPageIndex].image.file}
          alt={`Page ${currentPageIndex + 1}`}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="text-2xl">
        {currentPageIndex + 1} / {pages.length}
      </div>
    </div>
  );
};

export default PageViewer;
