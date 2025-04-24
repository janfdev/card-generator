import React, { useState } from "react";
import CanvasStage from "./components/CanvasStage";
import ControlsPanel from "./components/ControlsPanel";
import { CardData } from "./types/cardTypes";

const App: React.FC = () => {
  const [cardData, setCardData] = useState<CardData>({
    name: "John Doe",
    title: "Software Engineer",
    photo: "",
    backgroundColor: "#000000"
  });

  const handleChange = (field: keyof CardData, value: string) => {
    setCardData((prev) => ({ ...prev, [field]: value }));
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const readerPhoto = new FileReader();
    readerPhoto.onload = () => {
      setCardData((prev) => ({ ...prev, photo: readerPhoto.result as string }));
    };
    readerPhoto.readAsDataURL(file);
  };
  return (
    <section className="container flex gap-5 flex-col h-[70vh] items-center justify-center mx-auto px-4">
      <h1 className="text-3xl">Card Generator</h1>
      <div className="flex md:flex-row flex-col items-center gap-4 px-4">
        <ControlsPanel
          cardData={cardData}
          onChange={handleChange}
          onUploadPhoto={handlePhotoUpload}
        />
        <CanvasStage cardData={cardData} />
      </div>
    </section>
  );
};

export default App;
