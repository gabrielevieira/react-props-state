import React from 'react'

const Challenge = (marca, modelo, completo, KM) => {
    return (
        <div className='changelle-carros'>
            <p>Marca: {marca}</p>
            <p>Modelo: {modelo}</p>
            <p>Completo: {completo}</p>
            <p>KM: {KM}</p>
        </div>
    )
}

export default Challenge