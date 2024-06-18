"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { clsx } from "clsx";

const Logo = () => (
  <div>
    <Link href="/" className="font-bold text-2xl">
      ./slash
    </Link>
  </div>
);

export function Navbar() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <nav className="container">
      <div className="py-4 px-0 border-b-2 border-b-black flex items-center justify-between">
        <Logo />
        <ul className="hidden sm:flex items-center gap-x-4 font-bold">
          <li>
            <Link href="/" className="py-2">
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/create"
              className="px-5 py-2 border-2 border-black rounded-lg transition-colors duration-300 ease-in-out hover:bg-black hover:text-white whitespace-nowrap"
            >
              Create Post
            </Link>
          </li>
        </ul>
        <button type="button" className="sm:hidden" onClick={handleOpen}>
          <Menu className="text-2xl" />
        </button>
        <div
          className={clsx(
            "sm:hidden absolute top-0 right-0 bg-black rounded-es-full transition-all duration-300 ease-in-out",
            { "w-full h-full": open, "size-0": !open }
          )}
        >
          <div className="container w-full h-full text-white">
            <div className="py-4 w-full border-b-2 border-b-white flex items-center justify-between">
              <Logo />
              <button type="button" onClick={handleClose}>
                <X className="text-2xl" />
              </button>
            </div>
            <div dir="rtl" className="py-6">
              <ul className="font-bold text-xl space-y-4">
                <li>
                  <Link
                    href="/"
                    onClick={handleClose}
                    className="relative py-1 after:absolute after:right-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-white hover:after:w-full after:transition-all after:duration-300 after:ease-in-out"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/create"
                    onClick={handleClose}
                    className="relative py-1 after:absolute after:right-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-white hover:after:w-full after:transition-all after:duration-300 after:ease-in-out"
                  >
                    Create Post
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
