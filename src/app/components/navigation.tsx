import Link from 'next/link'

export default function Navbar() {
  return (
   <nav className="flex justify-between items-center bg-red-500 text-white p-4 text-xl">
  <div className="text-lg font-bold">BetterFlix</div>
  <div className="flex gap-15">
    <Link href="/" className="hover:underline">Home</Link>
    <Link href="/movies" className="hover:underline">Movies</Link>
  </div>
</nav>

  );
}
