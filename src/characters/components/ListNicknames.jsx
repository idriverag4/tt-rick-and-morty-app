import React from 'react'

export const ListNicknames = ({ arrayOriginal, arrayClean, order }) => {

    const validation = order == "Ascending" ? arrayClean.sort() // El metodo .sort() organiza el array de manera ascendente 
        : order == "Descending" ? arrayClean.sort().reverse() // El metodo .reverse() por si solo no organiza el arreglo de maner organiza el array de manera descendente 
            : arrayClean

    return (
        <>
            <div className="container text-left ">
                <div className="row d-flex justify-content-center">
                    <div className="col-3 border border-1">
                        <h4 className="mb-4">List Original</h4>
                        <ul>
                            {
                                arrayOriginal.map(val => <li key={val}>{val}</li>) // Pinta el array original
                            }
                        </ul>
                    </div>
                    <div className="col-3 border border-1">
                        <h4 className="mb-4">List {order}</h4>
                        <ul>
                            {
                                validation.map(val => <li key={val}>{val}</li>) // Pinta el array segun la selección del usuario
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </>




    )
}
