import Link from "next/link";
import React from "react";
import { ModeToggle } from "./ModeToggle";
import { NotebookPenIcon } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="w-full relative flex items-center justify-between max-w-2xl 2xl:max-w-6xl mx-auto px-4 py-5">
      <div>
        <Link
          href={"/"}
          className="font-bold text-3xl 2xl:text-3xl flex items-center justify-center gap-2"
        >
          <NotebookPenIcon className="2xl:w-8 h-8" />
          Alex<span className="text-primary">Blog.</span>
        </Link>
      </div>
      <ModeToggle />
    </nav>
  );
};

export default Navbar;
