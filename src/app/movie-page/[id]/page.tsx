import { Movie } from "@/app/components/movie";
import { PlayMovieButton } from "@/app/components/buttons/playMovie-button/PlayButton";
import { UpdateMovieButton } from "@/app/components/buttons/updateMovie-button/UpdateButton";
import { DeleteMovieButton } from "@/app/components/buttons/deleteMovie-button/DeleteMovie";

const MoviePage = async () => {
    return (<>
        <Movie />
        <div className="flex justify-center items-center gap-3">
            <PlayMovieButton/>
            <UpdateMovieButton/>
            <DeleteMovieButton/>
        </div>
    </>
    );
            
};

export default MoviePage;