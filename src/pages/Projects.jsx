import projects from '../data/projects'

function Projects () {
    return (
        <>
          <h1>Mis proyectos</h1>

          {projects.map((project) =>(
            <div key={project.id}>
                <h2>{project.name}</h2>
                <img src={project.image} alt={project.name} />
                <p>{project.description}</p>
                <a href={project.url}>Ver proyecto</a>
            </div>
          ))}
        </>
    )
}

export default Projects;