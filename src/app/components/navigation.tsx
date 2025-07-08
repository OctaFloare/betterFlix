import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="w-full bg-blue-600 text-white p-4">
      <div className="flex justify-center gap-8">
        <Link href="/" className="hover:underline">Home</Link>
        <Link href="/movies" className="hover:underline">Movies</Link>
      </div>
    </nav>
  );
};