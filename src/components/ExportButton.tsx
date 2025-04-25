import React from "react";
import { toPng } from "html-to-image";

interface Props {
  cardRef: React.RefObject<HTMLDivElement>;
}

const ExportButton: React.FC<Props> = ({ cardRef }) => {
  const handleExportCard = async () => {
    if (!cardRef.current) return;
    const node = cardRef.current;

    try {
      const dataUrl = await toPng(node, {
        cacheBust: true,
        backgroundColor: "#ffffff",
        width: node.offsetWidth,
        height: node.offsetHeight,
      });
      const link = document.createElement("a");
      link.download = "profile-card.png";
      link.href = dataUrl;
      link.click();
    } catch (error) {
      console.error("Export failed: ", error);
    }
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
