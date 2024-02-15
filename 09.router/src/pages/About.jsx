import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
        <h1>Welcom to React Router!</h1>
        <p>About Page!</p>
        <Link to={"/"}>Home Page로 이동</Link>
    </div>
  )
}

export default About