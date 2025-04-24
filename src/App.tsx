import React, { useState } from "react";
import CanvasStage from "./components/CanvasStage";
import ControlsPanel from "./components/ControlsPanel";
import { CardData } from "./types/types";
import Footer from "./components/Footer";

const App: React.FC = () => {
  const [cardData, setCardData] = useState<CardData>({
    name: "",
    title: "",
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
      const photoUrl = readerPhoto.result as string;
      setCardData((prev) => ({ ...prev, photo: photoUrl }));
    };
  };
  return (
    <>
      <section className="container flex flex-col h-screen gap-10 items-center justify-center mx-auto px-4 ">
        <h1 className="text-3xl mb-6 md:mb-0">Card Generator</h1>
        <div className="flex flex-col items-stretch gap-4 md:flex-row md:items-start md:gap-8">
          <ControlsPanel
            cardData={cardData}
            onChange={handleChange}
            onUploadPhoto={handlePhotoUpload}
          />
          <CanvasStage cardData={cardData} />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default App;
