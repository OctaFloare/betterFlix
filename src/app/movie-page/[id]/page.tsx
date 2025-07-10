interface PageProps {
    params: { id: string };
}

const getMovie = async (id: string) => {
    // Use process.env.NEXT_PUBLIC_BASE_URL or fallback to localhost
    const baseUrl =
        process.env.NEXT_PUBLIC_BASE_URL ||
        (typeof window === "undefined"
            ? "http://localhost:3000"
            : "");
    const url = `${baseUrl}/api/movies/${id}`;
    const res = await fetch(url, { cache: "no-store" });
    if (!res.ok) return null;
    return res.json();
};

const MoviePage = async ({ params }: PageProps) => {
    const { id } = params;
    const movie = await getMovie(id);

    if (!movie || movie.error) {
        return (
            <div className="flex flex-col items-center justify-center h-full">
                <h1 className="text-3xl font-bold">Movie Not Found</h1>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center py-10">
            <h1 className="text-5xl font-bold mb-6">{movie.title}</h1>
            <img src={movie.imageUrl} alt={movie.title} className="w-80 rounded-lg shadow-lg mb-6" />
            <p className="text-lg mb-2"><span className="font-semibold">Release Date:</span> {movie.releaseDate}</p>
            <p className="text-md mb-6">{movie.description}</p>
            <p className="text-md mb-6"><span className="font-semibold">Movie Source: </span>{movie.videoSource}</p>
        </div>
    );
};

export default MoviePage;