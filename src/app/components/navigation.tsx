'use client'

import { useEffect, useState } from "react"
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../../public/top-logo.svg'

export const NavigationMenu = () => {
  const [user, setUser] = useState<{name?: string, email: string} | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
  }

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

        {!user && (
          <>
            <Link href={"/register"} className='border-b-2 border-white hover:text-gray-400'>Register</Link>
            <Link href={"/login"} className='border-b-2 border-white hover:text-gray-400'>Login</Link>
          </>
        )}

        {user && (
          <>
            <Link href={"/"}
              onClick={handleLogout} 
              className='border-b-2 border-white hover:text-gray-400 bg-transparent cursor-pointer'
            >
              Logout
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}
