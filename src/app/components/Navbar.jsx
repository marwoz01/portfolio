import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="py-8">
      <ul className="flex flex-col gap-2">
        <li>
          <Link
            className="text-gray-400 hover:text-white cursor-pointer transition-colors"
            href="/"
          >
            Home
          </Link>
        </li>
        <li className="text-gray-400 hover:text-white cursor-pointer">
          <Link href="/projects">Projects</Link>
        </li>
        <li className="text-gray-400 hover:text-white cursor-pointer">
          <Link href="/about">About Me</Link>
        </li>
        <li className="text-gray-400 hover:text-white cursor-pointer">
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
