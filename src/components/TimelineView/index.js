import {Chrono} from 'react-chrono'

import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'

import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props

  const renderTimelineView = item => {
    if (item.categoryId === 'COURSE') {
      return <CourseTimelineCard courseListDetails={item} key={item.id} />
    }
    return <ProjectTimelineCard projectListDetails={item} key={item.id} />
  }
  return (
    <div className="bg-container">
      <h1 className="head">MY JOURNEY OF</h1>
      <p className="main-head">CCBP 4.0</p>
      <div className="chrono-container">
        <Chrono
          mode="VERTICAL_ALTERNATING"
          items={timelineItemsList}
          theme={{secondary: 'white'}}
        >
          {timelineItemsList.map(eachItem => renderTimelineView(eachItem))}
        </Chrono>
      </div>
    </div>
  )
}
export default TimelineView
