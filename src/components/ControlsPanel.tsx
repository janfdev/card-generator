import React from "react";
import { CardData } from "../types/types";
import { FaFileImage } from "react-icons/fa";

interface ControlsPanelProps {
  cardData: CardData;
  onChange: (field: keyof CardData, value: string) => void;
  onUploadPhoto: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ControlsPanel: React.FC<ControlsPanelProps> = ({
  cardData,
  onChange,
  onUploadPhoto
}) => {
  return (
    <div className="flex flex-col gap-3 p-4 bg-gray-100">
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
      <input
        type="color"
        className="w-full h-[50px] rounded-md"
        value={cardData.backgroundColor}
        onChange={(e) => onChange("backgroundColor", e.target.value)}
      />
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
      {/* <input
        type="file"
        accept="image/*"
        onChange={onUploadPhoto}
        className="border-2 placeholder:text-lg border-gray-300 p-4 rounded-md focus:ring-2 focus:outline-none focus:border-none focus:ring-indigo-500"
      /> */}
    </div>
  );
};

export default ControlsPanel;
