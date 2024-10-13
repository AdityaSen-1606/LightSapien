import React, { useEffect, useState } from "react";

interface ChapterListProps {
  chapters: any[];
  onChapterSelect: (chapterId: number) => void;
}

const ChapterList: React.FC<ChapterListProps> = ({
  chapters,
  onChapterSelect,
}) => {
    const [selectedChapterId, setSelectedChapterId] = useState<number|null>(null);

    const handleChapterSelect = (chapterId: number) => {
      setSelectedChapterId(chapterId);
      onChapterSelect(chapterId);
    };

    useEffect(() => {
      setSelectedChapterId(chapters[0]);
    }, [chapters]);

  return (
    <div className="flex">
      {chapters.map((chapter) => (
        <button
          key={chapter}
          onClick={() => handleChapterSelect(chapter)}
          className={`px-2 py-0.5 rounded border-2  ${
            selectedChapterId === chapter ||
            (selectedChapterId === null && chapter === chapters[0])
              ? "bg-teal-800 text-teal-50 border-yellow-600"
              : "bg-zinc-100 text-neutral-800 border-neutral-500"
          }`}
        >
         {chapter}
        </button>
      ))}
    </div>
  );
};

export default ChapterList;
