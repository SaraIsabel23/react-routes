import { Link } from 'react-router-dom'

function Home () {
    return (
        <>
          <h1>Bienvenido a mi página</h1>
          <p>Desarrolladora especializada en React.</p>

          <h2>Navega por los enlaces:</h2>
          <ul>
            <li><Link to="/projects">Ver proyectos</Link></li>
            <li><Link to="/resume">Ver curriculum</Link></li>
          </ul>
        </>
    )
}

export default Home;