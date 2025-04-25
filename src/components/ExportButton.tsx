import React from "react";
import { toPng } from "html-to-image";

interface Props {
  cardRef: React.RefObject<HTMLDivElement>;
}

const ExportButton: React.FC<Props> = ({ cardRef }) => {
  const handleExportCard = async () => {
    if (!cardRef.current) return;
    const dataUrl = await toPng(cardRef.current);
    const link = document.createElement("a");
    link.download = "profile-card.png";
    link.href = dataUrl;
    link.click();
  };
  return (
    <button
      onClick={handleExportCard}
      className="mt-4 px-4 py-2 bg-green-600 text-white rounded"
    >
      Export as Image
    </button>
  );
};

export default ExportButton;
