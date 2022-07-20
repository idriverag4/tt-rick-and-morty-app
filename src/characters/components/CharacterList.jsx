import { useQuery } from '@apollo/client';
import { GET_RESULT } from '../../apollo/querys/charactersQuery';
import { CharacterCard } from "./CharacterCard";

export const CharacterList = () => {
    
    const { loading, error, data } = useQuery(GET_RESULT);

    if (loading) return <p>Loading....</p>;
    if (error) return <p>{error}</p>;
    
    return (

        <div className="row rows-cols-1 row-cols-md-3 g-3 ">
            {
                data.characters.results.map( ( {id, name, image, gender, status} ) => (

                    <CharacterCard
                        key={id}
                        id={id}
                        name={name}
                        image={image}
                        gender={gender}
                        status={status}
                    />
                ))
            } 

        </div>

    )
}

