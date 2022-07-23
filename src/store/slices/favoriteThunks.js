
import { useEffect, useState } from "react";
import { useDispatch } from 'react-redux'
import { increment } from '../slices/favoriteSlice'

const init = () => {
    return JSON.parse(localStorage.getItem('favorite')) || []; // obtiene los elementos del LocalStorage
}

export const setfavoriteThunks = () => {

    const [dates, setDates] = useState(init);
    const dispatch = useDispatch();
    
    const onSetFavorite = (favorite) => {
        if (dates.length === 0 ) { // permite identicar si el localStorage esta vacio
            dispatch(increment(dates.length)); // se dispara la funcion increment que maneja el estado del contador en redux
           return setDates([...dates, favorite]) // Se assigna el objeto/personaje al estado dates-useState
        }

        const validate = dates.every(item => item.id !== favorite.id); // Aqui determinamos si objeto/personaje ya existe en el localStorage

        if (validate) { // si la condicion se cumple se envia el valor del contador de redux y tambien se asigna el objeto/personaje al estado dates-useState
            dispatch(increment(dates.length)); 
            setDates([...dates, favorite]);  
        }else{
            alert('The character was selected') // si la condicion no se cumple se envia un alerta al usuario
        }
         
    }

    useEffect(() => {
        localStorage.setItem('favorite', JSON.stringify(dates)); //Se envia el objeto/personaje al localStorage
    }, [dates]);

    return {
        dates,
        onSetFavorite,
    }

}
