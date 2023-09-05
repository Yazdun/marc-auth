import React from "react";
import { signIn, useSession, signOut } from "next-auth/react";

export const AuthButton = () => {
  const { status } = useSession();

  if (status === "loading") return null;

  if (status === "authenticated") {
    return (
      <button
        className="w-full p-5 text-red-500 rounded-md bg-red-500/20 text-bold"
        onClick={() => signOut()}
      >
        Logout
      </button>
    );
  }

  return (
    <button
      className="w-full p-5 text-blue-400 rounded-md bg-blue-500/30 text-bold"
      onClick={() => signIn("github")}
    >
      Sign in with Github
    </button>
  );
};
