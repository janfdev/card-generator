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
  { value: "PHP", label: "PHP" },
  { value: "NextJS", label: "NextJS" },
];

const socialMediaOptions = [
  { value: "Linkedin", label: "Linkedin" },
  { value: "Instagram", label: "Instagram" },
  { value: "Github", label: "Github" },
];

const ControlsPanel: React.FC<Props> = ({ data, onChange, onUploadPhoto }) => {
  const handleFieldChange = (field: keyof CardData, value: unknown) => {
    onChange({ ...data, [field]: value });
  };

  return (
    <section className="flex flex-col w-full gap-4">
      <span className="bg-indigo-300 text-indigo-800 md:text-lg text-sm p-2 rounded-md md:w-[420px] w-[300px]">
        Please choose picture before export image !
      </span>
      <div className="flex md:flex-col flex-row gap-4 w-full">
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-white">Name</label>
          <input
            type="text"
            className="w-full p-2 border border-white text-white rounded"
            placeholder="Input your name"
            value={data.name}
            onChange={(e) => handleFieldChange("name", e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-white">Job Title</label>
          <input
            type="text"
            placeholder="Input your job"
            value={data.jobTitle}
            className="w-full p-2 border border-white text-white rounded"
            onChange={(e) => handleFieldChange("jobTitle", e.target.value)}
          />
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-white">Description</label>
        <input
          type="text"
          className="w-full p-2 border border-white text-white rounded"
          placeholder="Input a short description"
          value={data.description}
          onChange={(e) => handleFieldChange("description", e.target.value)}
        />
      </div>

      {/* Upload Photo */}
      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-white">
          Profile Picture
        </label>
        <input
          type="file"
          className="flex h-10 w-full rounded-md border border-input bg-transparent  px-3 py-2 text-sm text-gray-400 file:border-0 file:bg-transparent file:text-gray-600 file:text-sm file:font-medium"
          onChange={onUploadPhoto}
        />
      </div>

      {/* Tech Stack Select */}
      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-white">Tech Stack</label>
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
          className="text-black"
          classNamePrefix={"react-select"}
        />
      </div>

      {/* Social Media Select */}
      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-white">Social Media</label>
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
          className="text-black"
          classNamePrefix={"react-select"}
        />
      </div>
    </section>
  );
};

export default ControlsPanel;
