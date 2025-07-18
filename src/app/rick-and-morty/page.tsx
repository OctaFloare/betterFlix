import { RickAndMortyContent } from "../components/rick-and-morty"
import { RickAndMortyEpisode } from "../components/rick-and-morty/episodes"

const RickAndMorty = async () => {

    return <>
        <RickAndMortyContent />
        <h2>Episodes</h2>
        <RickAndMortyEpisode/>
    </>
}

export default RickAndMorty