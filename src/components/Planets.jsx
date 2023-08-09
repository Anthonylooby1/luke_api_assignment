import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Planets = (props) => {
    const [data, setData] = useState('')
    const { id } = useParams()

    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/${id}`)
            .then(resp => {
                console.log(resp)
                setData(resp.data)
            })
            .catch(err => console.log(err))
    }, [id])

    return (
        <div>
            {
                data ?
                    <div>
                        <h1>{data.name}</h1>
                        <h3>Climate: {data.climate}</h3>
                        <h3>Terrain: {data.terrain}</h3>
                        <h3>Surface Water: {data.surface_water}</h3>
                        <h3>Population: {data.population}</h3>

                    </div> :
                    <p>Loading...</p>
            }


        </div>
    )
}

export default Planets