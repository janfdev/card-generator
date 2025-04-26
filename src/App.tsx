import React, { useRef, useState } from "react";
import CardPreview from "./components/CardPreview";
import ControlsPanel from "./components/ControlsPanel";
import { CardData } from "./types/types";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { BlobBackground } from "@/components/ui/blob-background";

const customBlobs = [
  {
    id: "blob1",
    gradientColors: ["#7C3AED", "#EC4899"],
    size: 450,
    blur: 70,
    speed: 12,
    opacity: 0.3,
    zIndex: 1,
    initialPosition: { x: 30, y: 30 },
    pulseScale: 1.2,
    rotationSpeed: 8,
    mouseInteractive: true,
  },
  {
    id: "blob2",
    gradientColors: ["#EC4899", "#3B82F6"],
    size: 350,
    blur: 60,
    speed: 15,
    opacity: 0.25,
    zIndex: 2,
    initialPosition: { x: 70, y: 50 },
    pulseScale: 1.15,
    rotationSpeed: 12,
    mouseInteractive: true,
  },
  {
    id: "blob3",
    gradientColors: ["#3B82F6", "#7C3AED"],
    size: 400,
    blur: 65,
    speed: 18,
    opacity: 0.2,
    zIndex: 3,
    initialPosition: { x: 50, y: 70 },
    pulseScale: 1.1,
    rotationSpeed: 10,
    mouseInteractive: true,
  },
];

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
    <section className="relative h-screen w-full bg-black">
      <BlobBackground blobs={customBlobs} />

      <div className="absolute inset-0 z-10 flex flex-col gap-20 w-full h-full justify-center">
        <div className="z-10 md:px-[100px] sticky top-0 px-5 md:-mt-[120px] ">
          <Navbar />
        </div>

        <div className="flex px-30 md:mt-[30px] mt-16 flex-col md:flex-row md:gap-6 gap-2">
          <div className="md:w-1/2 w-full">
            <ControlsPanel
              data={cardData}
              onChange={setCardData}
              onUploadPhoto={handleFileChange}
            />
          </div>

          <div className="md:w-1/2 w-full flex justify-center items-start">
            <CardPreview data={cardData} cardRef={cardRef} />
          </div>
        </div>
      </div>

      <div className="relative w-full h-[30%] bg-black">
        <BlobBackground blobs={customBlobs} />
        <Footer />
      </div>
    </section>
  );
};

export default App;
