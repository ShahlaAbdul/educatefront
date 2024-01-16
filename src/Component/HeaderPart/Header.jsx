import React from 'react'
import "./header.scss"

function Header() {
  return (
    <>
         <div className='head'>
            <div className='head_content'>
            <h1>We Rank the Best Courses on the Web</h1>
            <p>
                In the history of modern astronomy, there is probably no one greater leap forward 
                than the building and launch of the space telescope.
                </p>
            </div>

                <div className="head_search">
                    <input type="text" name="" id="" placeholder='search Courses' />
                    <span>search</span>
                </div>
                <div className="top_courses">
                    <span>top courses</span>
                </div>
        </div>
    </>
  )
}

export default Header