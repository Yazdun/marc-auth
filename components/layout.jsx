import React from "react";
import { Inter } from "next/font/google";
import clsx from "clsx";

const inter = Inter({ subsets: ["latin"] });

export const Layout = ({ children }) => {
  return (
    <main
      className={clsx(
        inter.className,
        "min-h-screen bg-zinc-900 flex items-center justify-center"
      )}
    >
      {children}
    </main>
  );
};
