import React from 'react'
import "./home.scss"
import OverCourses from '../../Component/OverCourses/OverCourses'
import Features from '../../Component/Features/Features'

function Home() {
  return (
    <div>
        <OverCourses></OverCourses>
        <Features></Features>
    </div>
  )
}

export default Home