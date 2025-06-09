"use client";

import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaFacebookF, FaLinkedinIn, FaRegCopy } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"; // for X (Twitter)

const PostShareMenu = () => {
  useEffect(() => {
    const toggleDropdown = function () {
      const menu = this.nextElementSibling;
      if (menu) {
        menu.classList.toggle("hidden");
        menu.classList.toggle("opacity-0");
      }
    };

    const buttons = document.querySelectorAll(".hs-dropdown-toggle");
    buttons.forEach((button) => {
      button.addEventListener("click", toggleDropdown);
    });

    const titleElement = document.querySelector("h2");
    const title = titleElement?.textContent?.trim() || "Untitled Post";
    const currentPageUrl = window.location.href;

    const twitterShareLink = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentPageUrl)}&text=${encodeURIComponent(`Check out "${title}"!`)}`;
    const facebookShareLink = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentPageUrl)}&quote=${encodeURIComponent(title)}`;
    const linkedinShareLink = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(currentPageUrl)}&title=${encodeURIComponent(title)}&summary=${encodeURIComponent(title)}`;

    document.getElementById("twitter-share")?.setAttribute("href", twitterShareLink);
    document.getElementById("facebook-share")?.setAttribute("href", facebookShareLink);
    document.getElementById("linkedin-share")?.setAttribute("href", linkedinShareLink);

    document.title = title;
    const newUrl = `${window.location.origin}${window.location.pathname}?event=${encodeURIComponent(title)}`;
    window.history.replaceState({}, "", newUrl);

    const copyLinkHandler = (e: Event) => {
      e.preventDefault();
      navigator.clipboard.writeText(newUrl).then(() => {
        toast.success("Share URL copied to clipboard!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "light",
        });
      });
    };

    const copyLinkButton = document.getElementById("copy-link");
    copyLinkButton?.addEventListener("click", copyLinkHandler);

    return () => {
      buttons.forEach((button) => button.removeEventListener("click", toggleDropdown));
      copyLinkButton?.removeEventListener("click", copyLinkHandler);
    };
  }, []);

  return (
    <>
      <ToastContainer />
      <div className="hs-dropdown relative inline-flex">
        <button
          type="button"
          className="hs-dropdown-toggle bg-green-800 py-2 px-3 rounded-xl flex items-center gap-x-2 text-sm text-white hover:text-gray-300"
          aria-haspopup="menu"
          aria-expanded="false"
        >
          <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
            <polyline points="16 6 12 2 8 6" />
            <line x1="12" y1="2" x2="12" y2="15" />
          </svg>
          Share
        </button>

        <div className="hs-dropdown-menu w-56 transition-opacity duration hidden opacity-0 z-10 bg-white shadow-md rounded-xl p-2 mt-1">
          <a
            id="copy-link"
            className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-black hover:bg-gray-100"
            href="#"
          >
            <FaRegCopy className="text-gray-600" />
            Copy link
          </a>
          <div className="border-t border-gray-200 my-2"></div>
          <a
            id="twitter-share"
            className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-black hover:bg-gray-100"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaXTwitter className="text-black" />
            Share on X
          </a>
          <a
            id="facebook-share"
            className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-black hover:bg-gray-100"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF className="text-blue-600" />
            Share on Facebook
          </a>
          <a
            id="linkedin-share"
            className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-black hover:bg-gray-100"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn className="text-blue-700" />
            Share on LinkedIn
          </a>
        </div>
      </div>
    </>
  );
};

export default PostShareMenu;
