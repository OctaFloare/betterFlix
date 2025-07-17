import { gql } from "@apollo/client";

export const GET_CHARACTERS = gql`
  query GetCharacters($page: Int, $filter: FilterCharacter) {
    characters(page: $page, filter: $filter) {
      results {
        id
        name
      }
    }
  }
`;

export const GET_EPISODES = gql`
  query GetEpisodes { 
    episodes {
      results {
        id
        name
        air_date
        characters {
          id
          name
        }
      }
    }
  }
`;