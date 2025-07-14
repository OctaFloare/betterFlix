import logo from '../../../public/logo.png'
import Image from 'next/image'

export const Home = () =>{
    return <div className="flex gap-8 flex-col items-center justify-center">
        <h1 className="text-2xl"> Discover your favorite movies and enjoy the show!</h1>
        <Image
            src={logo}
            alt="Page logo"
            width={300}
            height={300} 
            className='rounded-[50%]'
            />
    </div>
}