import Link from "next/link";

export default function NotFound() {
  return (
    <main className="notfound">
      <pre>
        <span className="err">{"Uncaught RouteNotFoundError: this page was never committed\n"}</span>
        {`    at Router.resolve (router.ts:404:1)
    at Visitor.navigate (curiosity.ts:42:7)
    at <anonymous>

fatal: pathspec did not match any files known to git.
hint: maybe it lives on a branch that was never merged.

`}
        <Link href="/" style={{ color: "var(--main)" }}>$ git checkout main</Link>
      </pre>
    </main>
  );
}
