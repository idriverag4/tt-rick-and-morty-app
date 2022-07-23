import React from 'react'

export const Exercise1 = () => {
    /*  1. Se crea la funcion sum y se le pasa como parametro el array.  
        2. Con la funcion .map recorremos todos las posiciones del array. 
        3. se crea una variable result que es la encargada de operar cada una de las posiciones del array. 
        4. Se crea un operador condicional ternario que hara lo siguiente:
           Condicion: num % 2 === 0 determina si un valor es par. num > 20 determina si un valor es superior a 20
           Expresion 1: Si la condicion se cumple, entonces reemplaza el valor por el numero 20
           Expresion 2: Si la condicion no se cumple, entonces continua el flujo normal de la iteracion del array sumandole el valor de 6
        5. Con el return se retorna el nuevo arreglo  */
    const sum = (array) => array.map(num => {
        let result = num + 6;
        num % 2 === 0 && num > 20 ? result = 20 : result;
        return result
    })

    /* 1. La variable result invoca la funcion sum y se le pasan comp parametro un array de 10 posiciones. 
       2. Debido a que react solo renderiza tipos de datos primitivos, entonces mediante la funcion .toString() se convierte el array a string*/
    const result = sum([9, 10, 11, 12, 15, 23, 24, 25, 26, 27]).toString();

    return (
        <>
            <h1 className="mt-3 text-center">Exercise 1</h1>
            <hr />
            <h1>Array1: [9,10,11,12,15,23,24,25,26,27] <small className="text-muted h4">// Array Original</small> </h1>
            <h1>Array2: [15,16,17,18,21,29,30,31,32,33] <small className="text-muted h4">// A cada posición se le suma el valor 6 </small> </h1>
            <h1>Result: [{result}] <small className="text-muted h4">// La condición se cumple con los valores 30 y 32 </small> </h1>
        </>
    )
}
