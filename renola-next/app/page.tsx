import HomeClient from "./home-client";
import { client } from "../tina/__generated__/client";

export const dynamic = "force-dynamic";

export default async function Home() {
  const result = await client.queries.home({ relativePath: "index.json" });

  return (
    <HomeClient
      data={result.data}
      query={result.query}
      variables={result.variables}
    />
  );
}
