import Image from "next/image";
import { Inter } from "next/font/google";
import { AuthButton } from "@/components/auth-button";
import { Layout } from "@/components/layout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <AuthButton />
    </div>
  );
}

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
