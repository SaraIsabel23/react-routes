import { studies, experiences } from '../data/resume';

function Resume () {
    return (
        <>
          <h1>Curriculum</h1>

          <h2>Experiencia laboral</h2>
          {experiences.map((experience) => (
            <div key={experience.id}>
                <h3>{experience.title}</h3>
                <p>{experience.company}</p>
                <p>{experience.date}</p>
            </div>
          ))}

          <h2>Educación</h2>
          {studies.map((study) => (
            <div key={study.id}>
                <h3>{study.title}</h3>
                <p>{study.institution}</p>
                <p>{study.date}</p>
            </div>
          ))}
        </>
    )
}

export default Resume;