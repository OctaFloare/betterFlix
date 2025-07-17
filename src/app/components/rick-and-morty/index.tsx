'use client'

import { useQuery } from "@apollo/client"
import { GET_CHARACTERS, GET_EPISODES } from "./graphql/schema"

type Character = {
    name: string
}

type Episode = {
    name: string
    air_date: string
    characters: Character[]
}

export const RickAndMortyContent = () => {
    const { data, loading, error } = useQuery<{ characters: { results: Character[] } }>(
        GET_CHARACTERS,
        {
            variables: {
                page: 4,
                filter: { name: 'Morty' }
            }
        }
    );

    const { data: episodes, loading: episodeLoading, error: episodeError } = useQuery<{ episodes: { results: Episode[] } }>(
        GET_EPISODES
    );

    if (loading || episodeLoading) return <p>Loading...</p>;
    if (error || episodeError) return <p>Error : {error?.message ?? episodeError?.message}</p>;

    return <>
        {!!data && data.characters.results.map((character, index) => {
            return <div key={`${character.name}-${index}`}>{character.name}</div>
        })}
        <br />
        <h2 className="text-2xl font-bold mb-4">Episodes</h2>
        <table style={{ borderCollapse: 'collapse', width: '100%' }}>
            <tr>
                <th style={{ border: '1px solid black', padding: '8px' }}>Title</th>
                <th style={{ border: '1px solid black', padding: '8px' }}>Release Date</th>
                <th style={{ border: '1px solid black', padding: '8px' }}>Characters</th>
            </tr>
            {!!episodes && episodes.episodes.results.map((episode, index) => (
                <tr key={`${episode.name}-${index}`}>
                    <td style={{ border: '1px solid black', padding: '8px' }}>{episode.name}</td>
                    <td style={{ border: '1px solid black', padding: '8px' }}>{episode.air_date}</td>
                    <td style={{ border: '1px solid black', padding: '8px' }}>
                        {episode.characters.map(c => c.name).join(', ')}
                    </td>
                </tr>
            ))}
        </table>
    </>
}
