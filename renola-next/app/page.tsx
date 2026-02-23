import path from "path";
import fs from "fs";
import HomeClient from "./home-client";

export const dynamic = "force-dynamic";

export default async function Home() {
  const filePath = path.join(process.cwd(), "content", "home", "index.json");
  const raw = fs.readFileSync(filePath, "utf-8");
  const data = JSON.parse(raw);

  return <HomeClient data={data} />;
}
