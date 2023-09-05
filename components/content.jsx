import React from "react";
import { AuthButton } from "@/components/auth-button";
import Marc from "@/components/marc.jpg";
import Image from "next/image";
import Link from "next/link";

export const Content = ({ title = "Homepage" }) => {
  return (
    <div className="flex flex-col items-center w-full max-w-md gap-5 p-5 border-2 rounded-md border-zinc-700">
      <Image
        className="rounded-full"
        placeholder="blur"
        width={100}
        height={100}
        src={Marc}
        alt="marc"
      />
      <h1 className="flex flex-col items-center gap-1 font-bold uppercase">
        <span>Mark's Auth App</span>
        <span className="text-sm text-green-300">{title}</span>
      </h1>
      <div className="grid w-full gap-1 md:grid-cols-2">
        <Link className="p-2 text-center rounded-md bg-white/10" href="/">
          Homepage
        </Link>
        <Link
          className="p-2 text-center rounded-md bg-white/10"
          href="/welcome"
        >
          Public Route
        </Link>
        <Link
          className="p-2 text-center rounded-md bg-white/10"
          href="/protected"
        >
          Protected Route
        </Link>
        <Link
          className="p-2 text-center rounded-md bg-white/10"
          href="/protected/sub"
        >
          Sub Protected Route
        </Link>
      </div>
      <AuthButton />
    </div>
  );
};
