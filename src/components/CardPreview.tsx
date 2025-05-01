import React from "react";
import { CardData } from "../types/types";
import { FaPython, FaInstagram, FaLaravel, FaPhp } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { RiJavascriptFill, RiNextjsFill } from "react-icons/ri";
import { RxLinkedinLogo } from "react-icons/rx";
import { VscGithubInverted } from "react-icons/vsc";
import { toPng } from "html-to-image";
import { toast, ToastContainer } from "react-toastify";

interface Props {
  data: CardData;
  cardRef: React.RefObject<HTMLDivElement>;
}

const iconMap = {
  Python: <FaPython className="text-[#306998]" />,
  Typescript: <BiLogoTypescript className="text-[#3178c6] text-xl" />,
  Javascript: <RiJavascriptFill className="text-[#f0d73a] text-xl" />,
  Laravel: <FaLaravel className="text-red-400" />,
  PHP: <FaPhp className="text-purple-500" />,
  NextJS: <RiNextjsFill className="text-black" />,
  Linkedin: <RxLinkedinLogo className="text-blue-500 text-xl" />,
  Instagram: <FaInstagram className="text-xl" />,
  Github: <VscGithubInverted className="text-xl text-black" />,
};

const CardPreview: React.FC<Props> = ({ data, cardRef }) => {
  const handleExportCard = async () => {
    if (!cardRef.current) return;
    const node = cardRef.current;

    try {
      const dataUrl = await toPng(node, {
        cacheBust: true,
        backgroundColor: "#ffffff",
        width: node.offsetWidth,
        height: node.offsetHeight,
      });

      const link = document.createElement("a");
      link.download = "profile-card.png";
      link.href = dataUrl;
      link.click();
    } catch (error) {
      console.error("Export failed: ", error);
    }
  };

  const handleToastPromise = async () => {
    await toast.promise(handleExportCard(), {
      pending: "Exporting card...",
      success: "Card exported successfully 👍",
      error: "Export failed",
    });
  };

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .slice(0, 2)
      .map((n) => n[0])
      .join("");
  };

  return (
    <section className="flex flex-col mt-5 ">
      <div
        ref={cardRef}
        className="md:max-w-md md:w-md w-[350px] mx-auto bg-white isolation-auto rounded-2xl shadow-xl p-6 text-center relative"
      >
        <div className="absolute top-4 left-4">
          <div className="bg-[#2c2a59] uppercase text-white font-bold rounded-full w-6 h-6 flex items-center justify-center text-xs">
            {getInitials(data.name)}
          </div>
        </div>

        <div className="relative md:w-24 w-16 md:h-24 h-16 mx-auto mb-4">
          <span className="absolute inset-0 rounded-full border-[4px] border-b-transparent border-l-transparent border-yellow-400 z-0 "></span>

          <img
            src={data.avatarUrl}
            alt="profile"
            className="md:w-24 w-16 rounded-full p-1 border-4 border-white z-10 object-cover"
          />
        </div>

        <h2 className="md:text-xl text-lg font-semibold text-gray-800 capitalize">
          {data.name}
        </h2>
        <p className="md:text-sm text-xs text-indigo-700 mb-2 capitalize">
          {data.jobTitle}
        </p>
        <p className="text-gray-600 md:text-sm text-xs mb-4 capitalize">
          {data.description}
        </p>

        <div className="flex flex-col gap-4">
          <h1 className="text-left text-sm text-gray-700">Tech Stack :</h1>

          <div className="mb-4 flex items-center justify-center gap-4">
            {data.techStack.map((tech) => (
              <div className="shadow-lg p-2" key={tech}>
                {iconMap[tech]}
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h1 className="text-left text-sm text-gray-700">Social Media : </h1>
          <div className="mb-4 flex items-center justify-center gap-4">
            {data.socialMedia.map((social) => (
              <div className="shadow-lg p-2" key={social}>
                {iconMap[social]}
              </div>
            ))}
          </div>
        </div>
      </div>
      <button
        onClick={handleToastPromise}
        className="mt-4 px-4 py-3 cursor-pointer bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white rounded-md"
      >
        Export as Image
      </button>
      <ToastContainer />
    </section>
  );
};

export default CardPreview;
