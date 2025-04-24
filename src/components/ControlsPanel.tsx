import React, { ReactNode } from "react";
import { CardData, LANG_COLORS } from "../types/types";
import { FaFileImage, FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

interface ControlsPanelProps {
  cardData: CardData;
  onChange: (field: keyof CardData, value: string | ReactNode) => void;
  onUploadPhoto: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ControlsPanel: React.FC<ControlsPanelProps> = ({
  cardData,
  onChange,
  onUploadPhoto
}) => {
  const allLangs = [
    "HTML",
    "CSS",
    "Javascript",
    "Typescript",
    "Python",
    "PHP",
    "Laravel"
  ];
  const allSocials = ["LinkedIn", "Instagram", "Github"];
  return (
    <div className="flex overflow-y-auto flex-col gap-3 p-4 bg-gray-100 rounded-xl max-w-md w-full">
      <input
        type="text"
        placeholder="Input Your Name"
        value={cardData.name}
        className="border-2 placeholder:text-lg border-gray-300 p-4 rounded-md focus:ring-2 focus:outline-none focus:border-none focus:ring-indigo-500"
        onChange={(e) => onChange("name", e.target.value)}
      />
      <input
        type="text"
        placeholder="Working"
        value={cardData.title}
        className="border-2 placeholder:text-lg border-gray-300 p-4 rounded-md focus:ring-2 focus:outline-none focus:border-none focus:ring-indigo-500"
        onChange={(e) => onChange("title", e.target.value)}
      />
      <textarea
        placeholder="Optional Description"
        className="border border-gray-400 rounded-md py-2 px-4 h-24"
        onChange={(e) => onChange("description", e.target.value)}
      />
      <select
        className="border border-gray-400 p-3 rounded-md"
        value={cardData.backgroundType}
        onChange={(e) => onChange("backgroundType", e.target.value)}
      >
        <option value="solid">Solid Color</option>
        <option value="gradient">Gradient</option>
        <option value="bubbles">Bubble</option>
      </select>
      <label className="text-sm font-bold">Choose Background Color:</label>
      {/* Color Picker */}
      <input
        type="color"
        className="w-full h-[50px] rounded-md"
        value={cardData.backgroundColor}
        onChange={(e) => onChange("backgroundColor", e.target.value)}
      />
      <label className="text-sm font-bold">Choose up to 5 Badges:</label>
      <div className="flex flex-wrap gap-2">
        {allLangs.map((lang) => (
          <button
            key={lang}
            onClick={() => {
              if (cardData.badges.includes(lang)) {
                onChange(
                  "badges",
                  cardData.badges.filter((badge) => badge !== lang)
                );
              } else if (cardData.badges.length < 5) {
                onChange("badges", [...cardData.badges, lang]);
              }
            }}
            className={`px-3 py-1 rounded-full text-white text-xs ${
              cardData.badges.includes(lang) ? "opacity-100" : "opacity-50"
            }`}
            style={{ backgroundColor: LANG_COLORS[lang] }}
          >
            {lang}
          </button>
        ))}
      </div>
      <label>Select Social Media :</label>
      <div className="flex gap-3">
        {allSocials.map((social) => (
          <button
            key={social}
            onClick={() => {
              if (cardData.socialLinks.includes(social)) {
                onChange(
                  "socialLinks",
                  cardData.socialLinks.filter((link) => link !== social)
                );
              } else {
                onChange("socialLinks", [...cardData.socialLinks, social]);
              }
            }}
            className={`p-2 rounded-full border-2 ${
              cardData.socialLinks.includes(social)
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            {social === "Linkedin" && <FaLinkedin />}
            {social === "Instagram" && <FaInstagram />}
            {social === "Github" && <FaGithub />}
          </button>
        ))}
      </div>
      {/* Upload Photo */}
      <div className="max-w-md mx-auto rounded-lg overflow-hidden md:max-w-xl">
        <div className="md:flex">
          <div className="w-full p-3">
            <div className="relative h-48 rounded-lg border-2 border-gray-200 focus:border-indigo-500 bg-gray-50 flex justify-center items-center shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <div className="absolute flex flex-col items-center">
                <FaFileImage className="text-6xl mb-2 text-gray-500" />
                <span className="block text-gray-500 font-semibold">
                  Drag &amp; drop your files here
                </span>
                <span className="block text-gray-400 font-normal mt-1">
                  or click to upload
                </span>
              </div>

              <input
                name=""
                type="file"
                accept="image/*"
                onChange={onUploadPhoto}
                className="h-full w-full opacity-0 cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ControlsPanel;
