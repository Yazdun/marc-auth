import { Layout } from "@/components/layout";
import { Content } from "@/components/content";

export default function Home() {
  return <Content title="Protected Sub Route" />;
}

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
