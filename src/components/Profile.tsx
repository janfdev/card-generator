import React from "react";
import { BiLogoTypescript } from "react-icons/bi";
import { FaInstagram, FaLaravel, FaPython } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { RxLinkedinLogo } from "react-icons/rx";
import { VscGithubInverted } from "react-icons/vsc";

const ProfileCard: React.FC = () => {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-xl p-6 text-center relative">
      {/* Logo pojok kiri atas */}
      <div className="absolute top-4 left-4">
        <div className="bg-[#2C2A59] text-white font-bold rounded-full w-6 h-6 flex items-center justify-center text-xs">
          FZ
        </div>
      </div>

      {/* Foto profil dengan efek lingkaran */}
      <div className="relative w-24 h-24 mx-auto mb-4">
        <div className="absolute inset-0 rounded-full border-[4px] border-b-transparent border-l-transparent border-yellow-400 z-0"></div>
        <img
          src="/src/assets/foto.jpeg" // ganti dengan path ke avatarmu
          alt="Profile"
          className="w-24 rounded-full p-1 border-4 border-white z-10 object-cover"
        />
      </div>

      {/* Nama dan role */}
      <h2 className="text-xl font-semibold text-gray-800">Joeylene Rivera</h2>
      <p className="text-sm text-indigo-700 mb-2">Web Developer</p>

      {/* Deskripsi */}
      <p className="text-gray-600 text-sm mb-4">
        A kiddo who uses Bootstrap and Laravel in web development. Currently
        playing around with design via Figma
      </p>

      {/* Tech Stack */}
      <div
        className="flex flex-col gap-2
      "
      >
        <h1 className="text-left text-sm text-gray-700 ">Tech Stack : </h1>
        <div className="mb-4 flex items-center justify-center gap-4">
          <div className="bg-white rounded-md shadow-md p-2">
            <FaPython className="text-[#306998]" />
          </div>
          <div className="bg-white rounded-md shadow-md p-2">
            <BiLogoTypescript className="text-[#3178c6] text-xl" />
          </div>
          <div className="bg-white rounded-md shadow-md p-2">
            <RiJavascriptFill className="text-[#f0d73a] text-xl" />
          </div>
          <div className="bg-white rounded-md shadow-md p-2">
            <FaLaravel className="text-red-400" />
          </div>
        </div>
      </div>

      {/* Icon social media */}
      <div
        className="flex flex-col gap-2
      "
      >
        <h1 className="text-left text-sm text-gray-700 ">Social Media : </h1>
        <div className="mb-4 flex items-center justify-center gap-4">
          <div className="bg-white rounded-md shadow-md p-2">
            <RxLinkedinLogo className="text-blue-500 text-xl" />
          </div>
          <div className="bg-white rounded-md shadow-md p-2">
            <FaInstagram className="text-xl" />
          </div>
          <div className="bg-white rounded-md shadow-md p-2">
            <VscGithubInverted className="text-xl text-black" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
