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
            <h3> {project.project_type} | {project.date}</h3>
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
    <div id='projects-page'>

      <div id='project-heading'>
          <h1> Take a Look At My Projects </h1>

          <div id='button-container'>
            <button> All </button>
            <button> Web Design</button>
            <button> Ui Design </button>
            <button> Product Design </button>
          </div>
      </div>

      <div id='projectCont'>
          <ProjectCard projects={projects}/>
        </div>
    </div>
  )
}

export default Projects
