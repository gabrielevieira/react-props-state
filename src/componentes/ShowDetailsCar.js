import React from 'react'

const ShowDetailsCar = ({ marca, km, cor, newCar }) => {
    return (
        <div>
            <h1>Detalhes do carro</h1>
            <ul>

                <li>Marca: {marca}</li>
                <li>KM: {km}</li>
                <li>Cor:{cor}</li>
            </ul>
            {newCar && (
                <p>Carro zero KM!</p>
            )}
        </div>
    )
}

export default ShowDetailsCar