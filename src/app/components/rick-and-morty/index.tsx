'use client'

import { useQuery } from "@apollo/client"
import { GET_CHARACTERS } from "./graphql/schema"

type Character = {
    name: string
}

export const RickAndMortyContent = () => {
    const { data, loading, error } =  useQuery<{ characters :{ results : Character[]}}>(
        GET_CHARACTERS,
        {
            variables: {
                page: 4,
                filter: { name: 'Morty'}
            }
        }
    );

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;

    return <>{!!data && data.characters.results.map((character, index) => {
        return <div key={`${character.name}-${index}`}>${character.name}</div>
    })}
    </>
}
