import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const People = (props) => {
    const [data, setData] = useState('')
    const {id} = useParams()

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${id}`)
        .then(resp=>{
            console.log(resp)
            setData(resp.data)
        })
        .catch(err=> console.log(err))
    },[id])
  return (
    <div>
        {
            data?
            <div>
                <h1>{data.name}</h1>
                <h3>Height: {data.height}</h3>
                <h3>Mass: {data.mass}</h3>
                <h3>Hair Color: {data.hair_color}</h3>
                <h3>Skin Color: {data.skin_color}</h3>
            </div>:
            <p>Loading...</p>    
        }
    </div>
  )
}

export default People