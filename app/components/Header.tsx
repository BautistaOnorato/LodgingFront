"use client";

import { usePathname, useRouter } from "next/navigation";
import { raleway } from "../fonts";

const Header = () => {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <header
      className={`bg-primary-color w-full flex items-center justify-center h-[10vh] ${raleway.className}`}
    >
      <div className="flex items-center justify-between w-[80%]">
        <h1
          className={` text-white text-3xl font-bold cursor-pointer`}
          onClick={() => router.push("/")}
        >
          LodgingService
        </h1>
        {pathname !== "/register" && pathname !== "/signin" && (
          <div className="flex items-center gap-8">
            <a
              className="text-white text-md hover:scale-105 font-medium cursor-pointer"
              href="/register"
            >
              Register
            </a>
            <a
              className="text-white text-md hover:scale-105 font-medium cursor-pointer"
              href="/signin"
            >
              Sign in
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
