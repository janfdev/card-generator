import React, { useRef, useState } from "react";
import CardPreview from "./components/CardPreview";
import ControlsPanel from "./components/ControlsPanel";
import { CardData } from "./types/types";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { BlobBackgroundDemo } from "./components/BlobBackgroundDemo";
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

  <></>;
  return (
    <div className="relative z-30 min-h-screen w-full overflow-hidden rounded-lg border border-border/40 bg-black backdrop-blur-xs text-white">
      <BlobBackground blobs={customBlobs} />

      <div className="relative z-40 md:px-20 px-5">
        <Navbar />
      </div>

      <main className="relative z-40 container mx-auto px-4 pt-32 pb-16">
        <div className="flex flex-col md:flex-row gap-6 ">
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
      </main>

      <div className="relative z-40 mt-24">
        <Footer />
      </div>
    </div>
  );
};

export default App;
