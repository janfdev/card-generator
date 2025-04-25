import React, { useRef, useState } from "react";
import CardPreview from "./components/CardPreview";
import ControlsPanel from "./components/ControlsPanel";
import ExportButton from "./components/ExportButton";
import { CardData } from "./types/types";

const App: React.FC = () => {
  const [cardData, setCardData] = useState<CardData>({
    name: "Rizqi Noor Fauzan",
    jobTitle: "Software Engineering",
    description: "A kiddo who uses Bootstrap and Laravel in web development.",
    avatarUrl: "/src/assets/foto.jpeg",
    initials: "RF",
    techStack: ["Python", "Laravel", "Typescript", "Javascript"],
    socialMedia: ["Linkedin", "Instagram", "Github"],
  });

  const cardRef = useRef<HTMLDivElement>(null!);

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <ControlsPanel onChange={setCardData} />
      <div className="flex justify-center">
        <CardPreview data={cardData} cardRef={cardRef} />
      </div>
      <div className="text-center">
        <ExportButton cardRef={cardRef} />
      </div>
    </div>
  );
};

export default App;
