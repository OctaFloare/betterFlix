'use client'

import { useQuery } from "@apollo/client"
import { GET_EPISODES } from "./graphql/episode-schema"

type Episode ={
    name: string;
    air_date: string;
    characters: {
        name: string;
    }[]
}

export const RickAndMortyEpisode = () => {
    const {data, loading, error} = useQuery<{episodes: {results: Episode[]}}>(
        GET_EPISODES,
        {
            variables: {
                page: 1
            }
        }
    );

    if(loading) return <p>Is Loading...</p>;
    if(error) return <p>Error: {error.message}</p>;

    if (data && data.episodes.results.length === 0) {
        return <p>No episodes on this page.</p>
    }



    return <>
        {!!data && data.episodes.results.map((episode) => {
            return <div key={`${episode.name}`}>
                <h3 className="text-red-600">Episode Name: {episode.name}</h3>
                <p className="text-yellow-600">Release Date: {episode.air_date}</p>
                <ul className="text-green-600">
                    {episode.characters.map((charcter, index) => (
                        <li key={`${charcter.name}-${index}`}>{charcter.name}</li>
                    ))}
                </ul>
            </div>
        })}
    </>
}