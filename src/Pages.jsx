// import React from 'react'
import PropTypes from 'prop-types'

const Pages = ({pagesdata}) => {
  return (
    <>
        <section className="section section-pages" id="pages">
          <div className="container">
            <h2 className="common-heading pages-heading">Our Special Doctors&nbsp; <i className="fa-solid fa-user-doctor"></i></h2>
            <p className='pages-para'>We take pride in our exceptional team of doctors, each a specialist in their respective fields.</p>
            <div className="pages-boxes grid grid-three-columns">
              {pagesdata.map((curele) => {
                return (
                  <div className="pages-box" key={curele.id}>
                    <img src={curele.img} alt="img" />
                    <div className="pages-link">
                      <i className="fa-brands fa-instagram"></i>
                      <i className="fa-brands fa-facebook"></i>
                      <i className="fa-brands fa-twitter"></i>
                      <i className="fa-solid fa-heart"></i>
                    </div>
                    <h3>{curele.title}</h3>
                    <p>{curele.work}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
    </>
  )
}

Pages.propTypes = {
  pagesdata: PropTypes.array.isRequired,
};

export default Pages
                 