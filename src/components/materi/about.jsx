import React from 'react'
import { useNavigate } from 'react-router-dom'


const About = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('../home')
    }
  return (
    <div>
        <h3>ini halaman About</h3>

        <button onClick={handleClick}>home</button>
    </div>
  )
}

export default About