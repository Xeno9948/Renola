import { client } from "@/tina/__generated__/client";
import HomeClient from "./home-client";

export const dynamic = "force-dynamic";

export default async function Home() {
  const data = await client.queries.home({
    relativePath: "index.json",
  });

  return <HomeClient {...data} />;
}
