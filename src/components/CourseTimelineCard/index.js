import {AiFillClockCircle} from 'react-icons/ai'

import './index.css'

const CourseTimeLineCard = props => {
  const {courseListDetails} = props
  const {courseTitle, description, duration, tagsList} = courseListDetails

  const renderTagsList = each => (
    <p className="list-item" key="COURSE">
      {each.name}
    </p>
  )
  return (
    <>
      <div className="course-container">
        <div className="heading-container">
          <h1 className="course-heading">{courseTitle}</h1>
          <div className="duration-container">
            <AiFillClockCircle className="icon" />
            <p className="duration">{duration}</p>
          </div>
        </div>
        <p className="description">{description}</p>
        <div className="tags-container">
          {tagsList.map(each => renderTagsList(each))}
        </div>
      </div>
    </>
  )
}

export default CourseTimeLineCard
