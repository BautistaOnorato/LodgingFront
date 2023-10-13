"use client";

import { usePathname, useRouter } from "next/navigation";
import { raleway } from "../../app/fonts";
import MainNav from "./MainNav";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const handleOpen = (value: boolean) => {
    setOpen(value)
  }

  return (
    <header
      className={`bg-primary-color relative w-full flex items-center justify-end sm:justify-center h-[10vh] ${raleway.className}`}
    >
      <div className="flex items-center justify-between w-full px-8">
        <h1
          className={`text-white text-xl sm:text-3xl font-bold cursor-pointer`}
          onClick={() => router.push("/")}
        >
          LodgingService
        </h1>
        {pathname !== "/register" && pathname !== "/signin" && (
          <>
            <div className="hidden sm:block">
              <MainNav routes={[{ href: "/register", title: "Register" }, { href: "/signin", title: "Sign in" }]} handleOpen={handleOpen} />
            </div>
            <div className="sm:hidden block">
              { 
                open ? 
                <X size={32} onClick={() => setOpen(false)} className="text-white cursor-pointer" /> 
                : <Menu size={32} onClick={() => setOpen(true)} className="text-white cursor-pointer" /> 
              }
            </div>
          </>
        )}
      </div>
      {
        open && <MobileMenu handleOpen={handleOpen} open={open} />
      }
    </header>
  );
};

export default Header;
