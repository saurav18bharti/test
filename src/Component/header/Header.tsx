import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  const route = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];
  return (
    <div className="bg-card p-3 flex justify-between items-center border-b border-border sticky top-0 z-50">
      <div className="relative size-10">
        <Image
          src="/logo.webp"
          alt="logo"
          className="absolute rounded-full size-10"
          fill
        />
      </div>
      <div className="flex justify-between items-center gap-4">
        <div className="flex gap-4 text-sm">
          {route.map((item, index) => (
            <Link href={item.path} key={index}>
              {item.name}
            </Link>
          ))}
        </div>
        <div className="flex gap-2">
          <Button
            size="default"
            className="transition-all duration-300 bg-primary dark:bg-primary/80 text-white "
          >
            Login
          </Button>
          <Button
          
            size="default"
            className="transition-all duration-300 bg-primary dark:bg-primary/80 text-white dark:text-primary-foreground"
          >
            Register
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
