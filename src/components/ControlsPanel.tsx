import React from "react";
import { CardData } from "../types/cardTypes";

interface ControlsPanelProps {
  cardData: CardData;
  onChange: (field: keyof CardData, value: string) => void;
  onUploadPhoto: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ControlsPanel: React.FC<ControlsPanelProps> = ({
  cardData,
  onChange,
  onUploadPhoto,
}) => {
  return (
    <div className="p-4 bg-gray-100">
      <input
        type="text"
        placeholder="Nama"
        value={cardData.name}
        className="block mb-2"
        onChange={(e) => onChange("name", e.target.value)}
      />
      <input
        type="text"
        placeholder="Jabatan"
        value={cardData.title}
        onChange={(e) => onChange("title", e.target.value)}
        className="block mb-2"
      />
      <input
        type="color"
        value={cardData.backgroundColor}
        onChange={(e) => onChange("backgroundColor", e.target.value)}
      />
      <input
        type="file"
        accept="image/*"
        onChange={onUploadPhoto}
        className="block mt-2"
      />
    </div>
  );
};

export default ControlsPanel;
