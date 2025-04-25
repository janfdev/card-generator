import React, { useState } from "react";
import { CardData, TechStack, SocialMedia } from "../types/types";

interface Props {
  onChange: (data: CardData) => void;
}

const ControlsPanel: React.FC<Props> = ({ onChange }) => {
  const [form, setForm] = useState<CardData>({
    name: "Fauzan Milion",
    jobTitle: "FullStack Developer",
    description: "A kiddo who uses Bootstrap and Laravel in web developer",
    avatarUrl: "/src/assets/foto.jpeg",
    initials: "FM",
    techStack: ["Python", "Typescript", "Javascript", "Laravel"],
    socialMedia: ["Linkedin", "Instagram", "Github"],
  });

  const handleChange = (field: keyof CardData, value: any) => {
    const updated = { ...form, [field]: value };
    setForm(updated);
    onChange(updated);
  };
  return (
    <div>
      <input
        type="text"
        className="block w-full mb-2 p-2 border rounded"
        placeholder="Input Your Name"
        onChange={(e) => handleChange("name", e.target.value)}
      />
      <input
        type="text"
        placeholder="Input Your Job"
        className="block w-full mb-2 p-2 border rounded"
        onChange={(e) => handleChange("jobTitle", e.target.value)}
      />
      <input type="text" />
    </div>
  );
};

export default ControlsPanel;
