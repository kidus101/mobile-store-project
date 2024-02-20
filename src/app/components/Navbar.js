import React from "react";
import Image from "next/image";
import { AiOutlineMenu, AiOutlineSearch, AiOutlineBell } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="max-w-[1000px] mx-auto flex justify-between items-center p-4">
      <div className="flex items-center">
        <h1 className="text-lg font-bold text-sm:text-xl lg:text-2xl px-2">
          <Image
            src="https://www.testvalley.kr/logo/logo-mobile-new.svg"
            alt="Logo"
            width={140}
            height={140}
          />
        </h1>
        <div className="cursor-pointer ml-6">
          <AiOutlineMenu className="text-green-500 font-bold" size={16} />
        </div>
        <div className="ml-2 text-green-500">
          <p>카테고리</p>
        </div>
      </div>

      {/* Search Input */}
      <div className="hidden sm:block bg-white border border-gray-200 sm:flex items-center px-2 w-[100px] sm:w-[200px] lg:w-[400px]">
        <AiOutlineSearch size={25} />
        <input
          className="bg-transparent bg-gray-200 p-2 w-full focus:outline-none"
          type="text"
          placeholder="살까말까 고민된다면 검색해보세요!"
        />
      </div>

      <div className="flex items-center">
        <button className="hidden sm:block">
          <Image
            src="https://www.testvalley.kr/common/home-event.svg"
            width={25}
            height={25}
            alt=""
          />
        </button>

        <div className="hidden sm:block ml-3 text-md">로그인 / 회원가입</div>

        <div className="sm:hidden flex">
          <AiOutlineBell className="text-green-500 text-xl font-bold ml-4" size={20} />
          <AiOutlineSearch className="text-green-500 text-xl font-bold ml-4" size={20} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;