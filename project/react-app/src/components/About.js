import React from 'react'
import person from '../Images/person.png'

const About = () => {
  return (
    <>
      <div className="container emp-profile">
        <form method="">
          <div className="row">
              <div className="col-md-4">
                  <img src={person} alt="not loaded" />
              </div>

              <div className="col-md-6">
                  <div className="profile-head"></div>
                  <h5>Profile View</h5>
                  <h6>web developer</h6>
                  <p className='profile-rating mt-3 mb-5'>Rankings<span>1-10</span></p>
              </div>

          </div>
        </form>
      </div>
    </>
  )
}

export default About
