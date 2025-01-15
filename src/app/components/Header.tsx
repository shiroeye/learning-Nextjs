import Link from "next/link";

export default function Header() {
  return (
    <header>
      <Link href="/">Index</Link>
      <a href="/example">Example</a>
    </header>
  );
}
