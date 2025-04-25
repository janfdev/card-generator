import React, { useRef, useState } from "react";
import CardPreview from "./components/CardPreview";
import ControlsPanel from "./components/ControlsPanel";
import { CardData } from "./types/types";
import Footer from "./components/Footer";

const App: React.FC = () => {
  const [cardData, setCardData] = useState<CardData>({
    name: "",
    jobTitle: "",
    description: "",
    avatarUrl: "",
    techStack: [],
    socialMedia: [],
  });

  const cardRef = useRef<HTMLDivElement>(null!);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      setCardData({ ...cardData, avatarUrl: reader.result as string });
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 p-5">
      <ControlsPanel
        data={cardData}
        onChange={setCardData}
        onUploadPhoto={handleFileChange}
      />
      <div className="flex flex-col justify-center items-center">
        <CardPreview data={cardData} cardRef={cardRef} />
      </div>
      <Footer />
    </div>
  );
};

export default App;
