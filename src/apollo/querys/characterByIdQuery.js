import { gql } from '@apollo/client';

export const GET_RESULT_ID = (id) => {
    return gql`
        query {
            character(id: ${id} ) {   
                id
                name
                gender
                status
                species
                image 
            }
            location(id: ${id} ){
                dimension
            }  
        }`;
}
