"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { MagnifyingGlassIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import Avatar from "react-avatar";
import { useBoardStore } from "@/store/BoardStore";
import { useModalStore } from "@/store/ModalStore";
function Header() {
  const [board, searchString, setSearchString] = useBoardStore((state) => [
    state.board,
    state.searchString,
    state.setSearchString,
  ]);
  const [loading, setLoading] = useState<boolean>(false);
  const [suggestion, setSuggestion] = useState<string>("");
  const [openProfileModal, closeProfileModal, isProfileOpen] = useModalStore(
    (state) => [
      state.openProfileModal,

      state.closeProfileModal,
      state.isProfileOpen,
    ]
  );
  const handleProfileModal = () => {
    if (!isProfileOpen) {
      openProfileModal();
    } else {
      closeProfileModal();
    }
  };
  // Will log 'Hello' whenever the user clicks outside of #my-element
  return (
    <header>
      <div className="flex flex-col md:flex-row items-center p-1 content-evenly bg-gray-500/10 rounded-b-2xl">
        <div
          className="absolute
        top-0
        left-0
        w-full
        h-96
        bg-gradient-to-br
        from-pink-400
         to-[#00fff7]
         rounded-md
         filter
         blur-3xl
         opacity-50
         -z-50"
        ></div>
        <Image
          src="https://links.papareact.com/c2cdd5"
          alt="trello logo"
          width={100}
          height={100}
          className="w-20 md:w-20 pb-10 md:pb-0 object-contain ml-10 pt-1"
        />
        <div className="flex items-center space-x-5 flex-1 justify-end w-25 md:w-20">
          <form className="flex flex-1 md:flex-initial items-center space-x-5 bg-white rounded-md p-1 shadow-md">
            <MagnifyingGlassIcon className="h-6 w-6 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="flex-1 outline-none p-0.5 "
              onChange={(e) => setSearchString(e.target.value)}
            />
            <button type="submit" hidden>
              Search
            </button>
          </form>

          {/*Avatar*/}
          <div onClick={handleProfileModal}>
            <Avatar name="Mahir Kücük" round color="#0055D1" size="35" />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center px-5 py-2 md:py-5">
        <p className="flex p-5 items-center text-sm font-light pr-5 shadow-xl rounded-xl w-fit bg-white italic max-w-3xl text-[#0055D1]">
          <UserCircleIcon
            className={`inline-block h-10 w-10 text-[#0055D1] mr-1 ${
              loading && "animate-spin"
            }`}
          />
          {suggestion && !loading
            ? suggestion
            : "GPT is summarising your tasks for the day... "}
        </p>
      </div>
    </header>
  );
}

export default Header;
