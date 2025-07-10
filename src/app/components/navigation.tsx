import Link from 'next/link';

export const NavigationMenu = () => {
  return (
    <nav className="flex justify-between items-center px-8 py-8 bg-gray-900">
        <div className='text-xl'>🎬 BetterFlix</div>
        <div className="flex gap-10 text-lg">
            <Link href={"/"} className='border-b-2 border-white hover:text-gray-400'>Home</Link>
            <Link href={"/movies"} className='border-b-2 border-white hover:text-gray-400'>Movies</Link>
            <Link href={"/create-movie"} className='border-b-2 border-white hover:text-gray-400'>Create Movie</Link>
        </div>
    </nav>
  );
};
