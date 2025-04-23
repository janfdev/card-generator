import React, { useState } from "react";
import CanvasStage from "./components/CanvasStage";
import ControlsPanel from "./components/ControlsPanel";
import { CardData } from "./types/cardTypes";

const App: React.FC = () => {
  const [cardData, setCardData] = useState<CardData>({
    name: "Nama Saya",
    title: "Posisi",
    photo: "",
    backgroundColor: "#1e40af",
  });

  const handleChange = (field: keyof CardData, value: string) => {
    setCardData((prev) => ({ ...prev, [field]: value }));
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      setCardData((prev) => ({ ...prev, photo: reader.result as string }));
    };
    reader.readAsDataURL(file);
  };

  return (
    <div>
      <ControlsPanel
        cardData={cardData}
        onChange={handleChange}
        onUploadPhoto={handlePhotoUpload}
      />
      <CanvasStage cardData={cardData} />
    </div>
  );
};

export default App;
