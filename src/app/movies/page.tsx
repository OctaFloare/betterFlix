import { Movies } from "../components/movies";
import { Navbar } from "../components/navigation";


const MoviesPage = () => {
    return <>
    <Navbar />
        <h1 className="flex self-center justify-center pb-20 text-5xl">Movies</h1>
       <Movies /> 
    </>
};

export default MoviesPage