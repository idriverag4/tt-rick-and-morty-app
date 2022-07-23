import { useQuery } from '@apollo/client';
import { GET_RESULT } from '../../apollo/querys/charactersQuery';
import { CharacterCard } from "../components/CharacterCard";
import { setfavoriteThunks } from "../../store/slices/favoriteThunks";

export const CharactersPage = () => {
    
    const { loading, error, data } = useQuery(GET_RESULT);
    const { onSetFavorite } = setfavoriteThunks();

    if (loading) return <p>Loading....</p>;
    if (error) return <p>{error}</p>;

    
    return (

        <>
            <h1 className='text-center mt-2'>Rick And Morty Characters</h1>
            <hr />

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
                            onSetFavorite={onSetFavorite}
                        />
                    ))
                } 
            </div>
        </>


    )
}

