import { gql } from '@apollo/client';

export const GET_RESULT = gql`
    query {
        characters(page: 1) {
            results {
                id
                name
                gender
                status
                species
                image
            }
        }
    }`;