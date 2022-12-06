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

                  <ul className="nav nav-tabs" role="tablist">
                  <li className="nav-item">
                    <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About</a>
                  </li>
                  <li className="nav-item">
                  <a className="nav-link active" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile"  aria-selected="false">Timeline</a>
                  </li>
                </ul>

              </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default About
