import Link from 'next/link';
import logo from '../../../public/top-logo.svg'
import Image from 'next/image';

export const NavigationMenu = () => {
  return (
    <nav className="flex justify-between items-center px-8 py-8 bg-gray-900 mb-20">
      <div className='flex gap-2'>
        <Image src={logo} width={40} height={40} className="rounded-[50%]" alt='Page logo'/>
        <p className='flex self-center'>BetterFlix</p>
      </div>
        <div className="flex gap-10 text-lg">
            <Link href={"/"} className='border-b-2 border-white hover:text-gray-400'>Home</Link>
            <Link href={"/movies"} className='border-b-2 border-white hover:text-gray-400'>Movies</Link>
            <Link href={"/create-movie"} className='border-b-2 border-white hover:text-gray-400'>Create Movie</Link>
        </div>
    </nav>
  );
};
