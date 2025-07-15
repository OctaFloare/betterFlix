import { gql } from "@apollo/client";

export const CREATE_CHARACTER = gql`
    mutation CreateCharacter($name: String!, $species: String!)  {
        createCharacter(name: $name, species: $species){
            id
            name
            species
        }
    }
`