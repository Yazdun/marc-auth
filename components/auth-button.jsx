import React from "react";
import { signIn, useSession } from "next-auth/react";

export const AuthButton = () => {
  const { status } = useSession();

  if (status === "authenticated" || status === "loading") return null;

  return (
    <button
      className="px-5 py-2 text-blue-400 rounded-md bg-blue-500/30 text-bold"
      onClick={() => signIn("github")}
    >
      Sign in with Github
    </button>
  );
};
