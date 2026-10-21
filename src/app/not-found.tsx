import Link from "next/link";
import { notFound } from "@/content";

// Served as 404.html by GitHub Pages, styled as an uncaught error with a git hint.
export default function NotFound() {
  return (
    <main className="notfound">
      <pre>
        <span className="err">{notFound.error}</span>
        {"\n"}
        {notFound.stackTrace.join("\n")}
        {"\n\n"}
        <Link href="/" className="home-link">
          {notFound.homeLink}
        </Link>
      </pre>
    </main>
  );
}
