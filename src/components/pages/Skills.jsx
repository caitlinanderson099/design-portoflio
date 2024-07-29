import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Skills = () => {

  const [skills, setSkills] = useState([]);

  useEffect(() => {
    axios.get('./SKILLS.json')
    .then(response => {
      console.log(response.data);
      setSkills(response.data);
    })

    .catch(error => {
      console.log(error);
    })
  }, [])

  const SkillCard = ({skills}) => {
    const mappedSkills = skills.map((skill, index) => {
      return (
        <div key={index} className='skill-card'>
          <img src={skill.skill_icon} alt='skill icon'/>
            <h2> {skill.skill_name} </h2>
        </div>
      ) // end of map return
    })

    return (
      <>
        {mappedSkills}
      </>
    ) // end of project card return
  }

  return (
      <div id='skills-page'>
        <h1> My Skills </h1>

        <div id='skill-container'>
          <SkillCard skills={skills}/>
        </div>
      </div>
  )
}

export default Skills
