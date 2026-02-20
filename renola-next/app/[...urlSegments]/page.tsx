// Renola: catch-all route unused — redirect 404
import { notFound } from "next/navigation";

export default function Page() {
  notFound();
}