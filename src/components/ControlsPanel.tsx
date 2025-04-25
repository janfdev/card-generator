import React, { useState } from "react";
import { CardData, TechStack, SocialMedia } from "../types/types";

interface Props {
  onChange: (data: CardData) => void;
  onUploadPhoto: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ControlsPanel: React.FC<Props> = ({ onChange, onUploadPhoto }) => {
  const [form, setForm] = useState<CardData>({
    name: "Fauzan Milion",
    jobTitle: "FullStack Developer",
    description: "",
    avatarUrl: "/src/assets/foto.jpeg",
    techStack: ["Python", "Typescript", "Javascript", "Laravel"],
    socialMedia: ["Linkedin", "Instagram", "Github"],
  });

  const handleChange = (field: keyof CardData, value: any) => {
    const updated = { ...form, [field]: value };
    setForm(updated);
    onChange(updated);
  };

  return (
    <div className="flex flex-col w-full gap-1">
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
      <div className="grid w-full max-w-xs items-center gap-1.5 mb-5">
        <label className="text-sm text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          Picture
        </label>
        <input
          type="file"
          className="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm text-gray-400 file:border-0 file:bg-transparent file:text-gray-600 file:text-sm file:font-medium"
          onChange={onUploadPhoto}
        />
      </div>
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
