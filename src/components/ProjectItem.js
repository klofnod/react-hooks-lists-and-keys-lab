import React from "react";

function ProjectItem({ name, about, technologies }) {
  console.log(technologies)
  const TechList = technologies.map((techinfo)=>{
    return <span key={techinfo}>{techinfo}</span>
})
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {TechList}
      </div>
    </div>
  );
}

export default ProjectItem;
