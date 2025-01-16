import Link from "next/link";

export default function Header() {
  return (
    <header>
      <Link href="/">Index</Link>
      <Link href="/example">Example</Link>
    </header>
  );
}
