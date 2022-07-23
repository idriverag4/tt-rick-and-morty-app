import React, { useState } from 'react'
import { ListNicknames } from '../components/ListNicknames';

export const Exercise2 = () => {

    const [combo, setCombo] = useState("");

    const onSelected = (e) => setCombo(e.target.value); // se toma el valor del comboBox seleccionado

    //Se define en un arrar con los valores suministrados
    const array = ["Triviño TI", "Homer Dev", " ", " Ragnar Front", "Loki UX"];

    /* Haciendo uso de la programacion funcional se limpia el array de los espacios vacios: 
            1. Con el metodo .map se recorren todas las posiciones del array. 
               Con el metodo .trim() se eliminan los espacios adelante y atras de cada una de las cadenas de texto
            2. El metodo .filter se retorna el array libre de espacios vacios  */
    const validation = array.map(val => val.trim()).filter(val => val != "");

    return (
        <>
            <h1 className="mt-3 text-center">Exercise 2</h1>
            <hr />

            <div className="container">
                <div className="row justify-content-center">
                    <div className="col col-8">
                        <select onChange={onSelected} className="form-select form-select-lg mb-3 " aria-label=".form-select-lg example">
                            <option value="" defaultValue>Select the order</option>
                            <option value="Ascending">Ascending</option>
                            <option value="Descending">Descending</option>
                        </select>
                    </div>
                </div>
            </div>

            <ListNicknames
                arrayClean={validation}
                order={combo}
                arrayOriginal={array}
            />

        </>
    )
}
