import React, { useRef, useState } from "react";
import CardPreview from "./components/CardPreview";
import ControlsPanel from "./components/ControlsPanel";
import { CardData } from "./types/types";

const App: React.FC = () => {
  const [cardData, setCardData] = useState<CardData>({
    name: "Rizqi Noor Fauzan",
    jobTitle: "Software Engineering",
    description: "",
    avatarUrl: "/src/assets/foto.jpeg",
    techStack: ["Python", "Laravel", "Typescript", "Javascript"],
    socialMedia: ["Linkedin", "Instagram", "Github"],
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
    <div className="min-h-screen bg-gray-50 p-4">
      <ControlsPanel onChange={setCardData} onUploadPhoto={handleFileChange} />
      <div className="flex justify-center">
        <CardPreview data={cardData} cardRef={cardRef} />
      </div>
    </div>
  );
};

export default App;
