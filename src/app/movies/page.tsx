import { Movies } from "../components/movies";
import { Navigation } from "../components/navigation";


const MoviesPage = () => {
    return <>
        <Navigation />
        <h1 className="flex self-center justify-center pb-20 pt-5 text-5xl">Movies</h1>
        <Movies />
    </>
};

export default MoviesPage