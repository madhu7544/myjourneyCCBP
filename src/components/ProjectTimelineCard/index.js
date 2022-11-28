import {AiFillCalendar} from 'react-icons/ai'

import './index.css'

const ProjectTimelineCard = props => {
  const {projectListDetails} = props
  const {
    categoryId,
    projectTitle,
    description,
    imageUrl,
    duration,
    projectUrl,
  } = projectListDetails
  return (
    <div className="project-container">
      <img src={imageUrl} alt={categoryId} className="image" />
      <div className="title-container">
        <h1 className="project-title">{projectTitle}</h1>
        <div className="project-duration-container">
          <AiFillCalendar className="project-icon" />
          <p className="project-duration">{duration}</p>
        </div>
      </div>
      <p className="project-description">{description}</p>
      <a className="visit" href={projectUrl}>
        Visit
      </a>
    </div>
  )
}

export default ProjectTimelineCard
