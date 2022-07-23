import React from 'react'
import { setfavoriteThunks } from '../../store/slices/favoriteThunks';
import { CharacterCard } from '../components/CharacterCard';

export const FavoritesPage = () => {

    const { onSetFavorite, dates } = setfavoriteThunks();

    return (
        <>
            <h1 className='text-center mt-2'>Characters Favorites</h1>
            <hr />

            <div className="row rows-cols-1 row-cols-md-3 g-3 ">
                {
                    dates.map(({ id, name, image, gender, status }) => (

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
