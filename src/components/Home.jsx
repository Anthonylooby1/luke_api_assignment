import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {

    const [formData, setFormData] = useState({
        type:'people',
        idNum: 1,
    })

    const navigate = useNavigate()
    const changeHandle = (e) => {
        const {name, value} = e.target
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const submitHandle = (e) => {
        e.preventDefault()
        navigate(`/${formData.type}/${formData.idNum}`)



    }
  return (
    <div>
        <h1>Select A Person Or Planet!</h1>
        <form onSubmit={submitHandle}>
            <label>Find A :</label>
            <select onChange={changeHandle} name='type'>
                <option value='people'>Person</option>
                <option value='planets'>Planet</option>
            </select>
            <label>ID:</label>
            <input type='number' name='idNum' id='idNum' value={formData.idNum} onChange={changeHandle}></input>
            <button type='submit'>Find</button>
        </form>
    </div>
  )
}

export default Home