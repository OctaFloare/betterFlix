import {gql}  from "@apollo/client"

export const GET_EPISODES = gql `
    query GetEpisodes($page: Int){
        episodes(page: $page){
            results{
                name
                air_date
                characters{
                    id
                    name
                }
            }
        }
    }
`;