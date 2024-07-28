import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Projects = () => {

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get('./PROJECTS.json')
    .then(response => {
      console.log(response.data);
      setProjects(response.data);
    })

    .catch(error => {
      console.log(error);
    })
  }, [])

  const ProjectCard = ({projects}) => {
    const mappedProjects = projects.map((project, index) => {
      return (
        <div key={index} className='project-card'>
          <img src={project.project_images} alt='project image'/>
          <div className='project-details'>
            <h2> {project.project_name} </h2>
            <h3> {project.project_type}  {project.date}</h3>
            <p> {project.description} </p>
            <button> Read More </button>
          </div>
        </div>
      ) // end of map return
    })

    return (
      <>
        {mappedProjects}
      </>
    ) // end of project card return
  }


  // MASTER RETURN STATEMENT
  return (
    <>
      <div id='projectCont'>
          <ProjectCard projects={projects}/>
        </div>
    </>
  )
}

export default Projects
