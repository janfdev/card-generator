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
        placeholder="Input your name"
        onChange={(e) => handleChange("name", e.target.value)}
      />
      <input
        type="text"
        placeholder="Input your job"
        className="block w-full mb-2 p-2 border rounded"
        onChange={(e) => handleChange("jobTitle", e.target.value)}
      />
      <input
        type="text"
        className="block w-full mb-2 p-2 border rounded"
        placeholder="description"
        onChange={(e) => handleChange("description", e.target.value)}
      />
      <input
        className="block w-full mb-2 p-2 border rounded"
        placeholder="Avatar URL"
        value={form.avatarUrl}
        onChange={(e) => handleChange("avatarUrl", e.target.value)}
      />
      <div className="flex flex-wrap gap-2 mb-2">
        {(["Python", "Typescript", "Javascript", "Laravel"] as TechStack[]).map(
          (tech) => (
            <button
              key={tech}
              onClick={() =>
                handleChange(
                  "techStack",
                  form.techStack.includes(tech)
                    ? form.techStack.filter((t) => t !== tech)
                    : [...form.techStack, tech]
                )
              }
              className={`px-2 py-1 rounded ${
                form.techStack.includes(tech)
                  ? "bg-indigo-500 text-white"
                  : "bg-gray-200"
              }`}
            >
              {tech}
            </button>
          )
        )}
      </div>
      <div className="flex flex-wrap gap-2">
        {(["Linkedin", "Instagram", "Github"] as SocialMedia[]).map((media) => (
          <button
            key={media}
            onClick={() =>
              handleChange(
                "socialMedia",
                form.socialMedia.includes(media)
                  ? form.socialMedia.filter((m) => m !== media)
                  : [...form.socialMedia, media]
              )
            }
            className={`px-2 py-1 rounded ${
              form.socialMedia.includes(media)
                ? "bg-indigo-500 text-white"
                : "bg-gray-200"
            }`}
          >
            {media}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ControlsPanel;
