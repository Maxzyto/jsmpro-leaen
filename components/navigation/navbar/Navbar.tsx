// import { Link } from "lucide-react";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Theme from "./Theme";
import MobileNavigation from "./MobileNavigation";

function Navbar() {
  return (
    <nav
      className="flex-between background-light900_dark200 fixed z-50 w-full gap-5 p-6 shadow-light-300 sm:p-12 dark:shadow-none
"
    >
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="./images/logo-origin.svg"
          alt="DevFlow logo"
          width={23}
          height={23}
        />

        <p className="h2-bold font-space-grotesk text-dark-100 max-sm:hidden dark:text-light-900">
          Dev<span className="text-primary-500">Flow</span>
        </p>
      </Link>

      <p className="dark:text-light-900">Global Search</p>

      <div className="flex-between gap-5">
        <Theme />

        <MobileNavigation />
      </div>
    </nav>
  );
}

export default Navbar;
