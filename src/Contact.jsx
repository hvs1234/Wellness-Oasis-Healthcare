const Contact = () => {
  return (
    <>

        {/* Contact Section */}

        <section className="section section-contact-content" id="contact">
          <div className="container">
            <h2 className="common-heading">Contact Us&nbsp; <i className="fa-solid fa-headset"></i></h2>
            <p className="contact-para">Wellness Oasis Healthcare is our premier center, committed to providing top-quality healthcare services in a tranquil and supportive environment.</p>
          </div>
        </section>

        <section className="section section-contact">
            <div className="overlay"></div>
            <div className="container">
                <main>
                  <div className="hero-content grid grid-two-columns">
                    <div className="hero-data">
                      <h1 className="hero-heading">The greatest wealth is health</h1>
                      <h2><i className="fa-solid fa-hand-point-right"></i>&nbsp; The art of medicine consists of amusing the patient while nature cures the disease.</h2>
                      <h2><i className="fa-solid fa-hand-point-right"></i>&nbsp; The most important thing in illness is never to lose heart.</h2>
                      <h2><i className="fa-solid fa-hand-point-right"></i>&nbsp; The good physician treats the disease; the great physician treats the patient who has the disease.</h2>
                    </div>
                    <div className="section-contact-main">
                      <form action="https://formspree.io/f/xyyrbnny" method='POST'>
                        <h3 className='section-contact-heading'>Wellness Oasis Healthcare</h3>
                        <div>
                          <input className="input-here" id="name1" name="Name" type="text" placeholder="Your Name" required autoComplete="off" />
                        </div>
                        <div>
                          <input className="input-here" id="email" name="Email" type="email" placeholder="Your Email" required autoComplete="off" />
                        </div>
                        <div>
                          <input className="input-here" id="age" name="Age" type="number" placeholder="Your Age" required autoComplete="off" />
                        </div>
                        <div>
                          <select name="gender" id="gender">
                            <option value="gender">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                        <div>
                          <input className='input-here' id="phone" type="number" name='Phone' placeholder='Your Phone' required autoComplete='off' />
                        </div>
                        <div>
                          <input id="submit" name="submit" type="submit" className="btn submit-btn" value="Contact Now" />
                        </div>
                      </form>
                    </div>
                  </div>
                </main>
            </div>
        </section>
    </>
  )
}

export default Contact