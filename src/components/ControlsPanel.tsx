import React from "react";
import { CardData, TechStack, SocialMedia } from "../types/types";
import Select from "react-select";

interface Props {
  data: CardData;
  onChange: (data: CardData) => void;
  onUploadPhoto: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const techStackOptions = [
  { value: "Python", label: "Python" },
  { value: "Typescript", label: "Typescript" },
  { value: "Javascript", label: "Javascript" },
  { value: "Laravel", label: "Laravel" },
];

const socialMediaOptions = [
  { value: "Linkedin", label: "Linkedin" },
  { value: "Instagram", label: "Instagram" },
  { value: "Github", label: "Github" },
];

const ControlsPanel: React.FC<Props> = ({ data, onChange, onUploadPhoto }) => {
  const handleFieldChange = (field: keyof CardData, value: any) => {
    onChange({ ...data, [field]: value });
  };

  return (
    <div className="flex flex-col w-full gap-1 text-white">
      <input
        type="text"
        className="w-full mb-2 p-2 border rounded"
        placeholder="Input your name"
        onChange={(e) => handleFieldChange("name", e.target.value)}
      />
      <input
        type="text"
        placeholder="Input your job"
        value={data.jobTitle}
        className="w-full mb-2 p-2 border rounded"
        onChange={(e) => handleFieldChange("jobTitle", e.target.value)}
      />
      <input
        type="text"
        className="w-full mb-2 p-2 border rounded"
        placeholder="description"
        onChange={(e) => handleFieldChange("description", e.target.value)}
      />
      <div className="grid w-full max-w-xs items-center gap-1.5 mb-2">
        <label className="text-sm text-white font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          Choose your profile picture
        </label>
        <input
          type="file"
          className="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm text-gray-400 file:border-0 file:bg-transparent file:text-gray-600 file:text-sm file:font-medium"
          onChange={onUploadPhoto}
        />
      </div>
      <h3 className="text-lg">Tech Stack : </h3>
      <Select
        isMulti
        options={techStackOptions}
        value={techStackOptions.filter((option) =>
          data.techStack.includes(option.value as TechStack)
        )}
        onChange={(selected) => {
          handleFieldChange(
            "techStack",
            selected.map((item) => item.value as TechStack)
          );
        }}
        className="mb-4"
        classNamePrefix={"react-select"}
      />
      <h3 className="text-lg">Social Media : </h3>
      <Select
        isMulti
        options={socialMediaOptions}
        value={socialMediaOptions.filter((option) =>
          data.socialMedia.includes(option.value as SocialMedia)
        )}
        onChange={(selected) => {
          handleFieldChange(
            "socialMedia",
            selected.map((item) => item.value as SocialMedia)
          );
        }}
      />
    </div>
  );
};

export default ControlsPanel;
