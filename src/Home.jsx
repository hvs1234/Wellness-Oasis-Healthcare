import React from 'react'
import logo from './assets/logo.webp'
import about_img from './assets/about-img.webp'
import choose_us_img from './assets/choose-us-img.webp'
import Pages from './Pages'
import Data from './PagesAPI'
import Contact from './Contact'

const Home = () => {

  // Responsive Navbar

  const [isActive, setIsActive] = React.useState(false);
  const toggleNavbar = () => {
    setIsActive(!isActive);
  };

  // Sticky Navbar

  React.useEffect(() => {
    const sectionHero = document.querySelector(".section-hero");

    const observerCallback = (entries) => {
      const ent = entries[0];
      !ent.isIntersecting ?
        document.body.classList.add("sticky") :
        document.body.classList.remove("sticky");
    };

    const options = {
      root: null,
      threshold: 0,
      rootMargin: "-100px",
    };

    const observer = new IntersectionObserver(observerCallback, options);

    observer.observe(sectionHero);

    return () => {
      observer.disconnect();
    };
  }, []);

  // Increment Counter

  React.useEffect(() => {
    const workdata = document.querySelector('.section-work');

    const workObserverCallback = (entries) => {
      const [entry] = entries;
      if (!entry.isIntersecting) return;

      const countNum = document.querySelectorAll('.counter-numbers');
      const speed = 150;
      countNum.forEach((curEle) => {
        const updateNum = () => {
          const target = parseInt(curEle.dataset.number);
          const initial = parseInt(curEle.innerText);
          const increment = Math.trunc(target / speed);
          if (initial < target) {
            curEle.innerText = `${initial + increment}+`;
            setTimeout(updateNum, 5);
          } else {
            curEle.innerText = `${target}+`;
          }
        };
        updateNum();
      });
    };

    const options = {
      root: null,
      threshold: 0,
    };

    const workObserve = new IntersectionObserver(workObserverCallback, options);
    workObserve.observe(workdata);

    return () => {
      workObserve.disconnect();
    };
  }, []);

  // Pages API

  const [pagesdata] = React.useState(Data);

  return (
    <>
        {/* Hero Section */}

        <section className="section section-hero" id='home'>
          <div className="overlay"></div>
          <div className="container">
            <header className={`header ${isActive ? 'active' : ''}`}>
              <div className="logo">
                <img src={logo} alt="logo" />
                <h2>Wellness Oasis</h2>
              </div>
              <nav className="navbar">
                <ul>
                  <li><a href="/" className='navlink'>Home</a></li>
                  <li><a href="#about" className='navlink'>About</a></li>
                  <li><a href="#service" className='navlink'>Service</a></li>
                  <li><a href="#pages" className='navlink'>Pages</a></li>
                </ul>
              </nav>
              <div className="header-contact">
                <a href="#contact" className="btn header-contact-btn">Contact</a>
                <div className="mobile-navbar-btn" onClick={toggleNavbar}>
                  <i name="ham" className="fa-solid fa-bars mobile-nav-icon"></i>
                  <i name="cross" className="fa-solid fa-xmark mobile-nav-icon"></i>
                </div>
              </div>
            </header>
            <main>
              <div className="hero-content grid grid-two-columns">
                <div className="hero-data">
                  <h1 className="hero-heading">Providing an Exceptional Patient Experience</h1>
                  <p className='hero-para'><i className="fa-solid fa-quote-left hero-para-icon"></i>&nbsp; Welcome to Wellness Oasis Healthcare center, where exceptional patient experiences are our priority. With compassionate care, state-of-the-art facilities, and a patient-centered approach, we`re dedicated to your well-being. Trust us with your health and experience the difference. &nbsp;<i className="fa-solid fa-quote-right hero-para-icon"></i></p>
                  <div><a href="#service" className="btn hero-data-btn">See Services</a></div>
                </div>
                <div className="section-contact-main">
                  <form action="https://formspree.io/f/xyyrbnny" method='POST'>
                    <h3 className='section-contact-heading'>Book Now</h3>
                    <div>
                      <input className="input-here" id="name1" name="Name" type="text" placeholder="Your Name" required autoComplete="off" />
                    </div>
                    <div>
                      <select name="Service Type" id="name2">
                        <option value="default">Select Service Type</option>
                        <option value="laboratorytest">Laboratory Test</option>
                        <option value="laboratorytest">Health Check</option>
                        <option value="laboratorytest">General Denistry</option>
                      </select>
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
                      <input id="submit" name="submit" type="submit" className="btn submit-btn" value="Book Appointment" />
                    </div>
                  </form>
                </div>
              </div>
            </main>
          </div>
        </section>

        {/* About Section */}

        <section className="section section-about" id='about'>
          <div className="container">
            <h2 className="common-heading about-heading">About Us&nbsp; <i className="fa-solid fa-users"></i></h2>
            <p className='about-para'>Welcome to Wellness Oasis Healthcare, where compassion meets expertise. Empowering health journeys through holistic care and innovative solutions.</p>
            <div className="about-content grid grid-two-columns">
              <div className="about-data">
                <p className='about-data-heading'><i className="fa-regular fa-hand-point-right"></i>&nbsp; Healthcare Center Name:- Wellness Oasis Healthcare</p>
                <p>Discover Wellness Oasis Healthcare, your sanctuary for comprehensive health solutions. With a focus on holistic well-being and personalized care, we`re committed to guiding you on your journey to optimal health and vitality. Welcome to your oasis.</p>
                <p className="about-data-heading"><i className="fa-regular fa-hand-point-right"></i>&nbsp; Founded:- 2005</p>
                <p>At Wellness Oasis Healthcare, our dedicated team provides compassionate support, advanced treatments, and tailored plans to nurture your well-being.</p>
                <p className='about-data-heading'><i className="fa-regular fa-hand-point-right"></i>&nbsp; Location:- Subhash Road Dehradun, Uttarakhand, India</p>
              </div>
              <div className="about-img">
                <img src={about_img} alt="about-img" />
              </div>
            </div>
          </div>
        </section>

        {/* Service Section */}

        <section className="section section-service" id='service'>
          <div className="container">
            <h2 className="common-heading service-heading">Our Special Service&nbsp; <i className="fa-solid fa-stethoscope"></i></h2>
            <p className='service-para'>Experience personalized care with our healthcare service, offering expert consultations, innovative treatments, and compassionate support for your well-being journey.</p>
            <div className="service-boxes grid grid-three-columns">
              <div className="service-box">
                <i className="fa-solid fa-microscope"></i>  
                <h3>Laboratory Test</h3>
                <p>Accurate Diagnostics, Swift Results: Experience top-notch Laboratory testing at our facility.</p>
                <div><a href="#home" className='btn service-btn'>Get Appointment</a></div>
              </div>
              <div className="service-box">
                <i className="fa-solid fa-head-side-virus"></i>  
                <h3>Health Check</h3>
                <p>Our thought assessments and expert evaluations help you stay proactive about your health.</p>
                <div><a href="#home" className='btn service-btn'>Get Appointment</a></div>
              </div>
              <div className="service-box">
                <i className="fa-solid fa-hospital"></i>  
                <h3>General Dentistry</h3>
                <p>Experience comprehensive oral care with Densistry. Trust us to keep your bright.</p>
                <div><a href="#home" className='btn service-btn'>Get Appointment</a></div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}

        <section className="section section-choose-us">
          <div className="container">
            <div className="choose-us-content grid grid-two-columns">
              <div className="choose-us-img">
                <img src={choose_us_img} alt="choose-us-img" />
              </div>
              <div className="choose-us-data">
                <h2>Why Choose Us ?</h2>
                <p>Choose Wellness Oasis Healthcare for comprehensive, personalized wellness solutions. Our expert team combines cutting-edge medical technology with compassionate care, ensuring your health needs are met with excellence. Experience a holistic approach to healthcare, tailored to your unique needs, promoting vitality and well-being at every stage of life.</p>
                <div className="choose-us-boxes">
                  <div className="choose-us-box">
                    <i className="fa-solid fa-hand-holding-heart"></i>
                    <div className="choose-us-box-data">
                      <h3>Intensive Care</h3>
                      <p>Our Intensive Care Unit is equipped with advanced technology and staffed by team of professionals.</p>
                    </div>
                  </div>
                  <div className="choose-us-box">
                    <i className="fa-solid fa-truck-medical"></i>
                    <div className="choose-us-box-data">
                      <h3>Free Ambulance Car</h3>
                      <p>A compassionate initiative to prioritize your health and well-being without any financial burden.</p>
                    </div>
                  </div>
                  <div className="choose-us-box">
                    <i className="fa-solid fa-hospital"></i>
                    <div className="choose-us-box-data">
                      <h3>Medical and Surgical</h3>
                      <p>Our Medical and Surgical services offer advanced healthcare solutions to address medical needs.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Animated Counter Section --> */}

        <section className="section section-work">
            <div className="container grid grid-three-columns">
                <div>
                    <h2 className="counter-numbers" data-number="1500+">0+</h2>
                    <p className="work-para">Healthcare Doctors</p>
                </div>
                <div>
                    <h2 className="counter-numbers" data-number="3000+">0+</h2>
                    <p className="work-para">Patients Enquiry</p>
                </div>
                <div>
                    <h2 className="counter-numbers" data-number="6000+">0+</h2>
                    <p className="work-para">Experience</p>
                </div>
            </div>
        </section>

        {/* Pages Section */}
        
        <Pages pagesdata = {pagesdata} />

        {/* Contact Section */}

        <Contact />

        {/* Footer Section */}

        <section className="section section-footer" id='footer'>
          <div className="container">
            <div className="footer-content grid grid-four-columns">
              <div className="f-main">
                <h3>Health <span>Care</span></h3>
                <div className="f-main-data">
                  <p>We are honored to be a part of your healthcare journey and committed to delivering compassionate, personalized, and top-notch care every step of the way.</p>
                  <p>Trust us with your health, and let us work together to achieve the best possible outcomes for you and your loved ones.</p>
                  <div className="social-links">
                    <a href="https://www.facebook.com/profile.php?id=100084133414284" target='_blank'><i className="fa-brands fa-facebook"></i></a>
                    <a href="https://www.instagram.com/ha.rshsharma135/" target='_blank'><i className="fa-brands fa-instagram"></i></a>
                    <a href="https://www.linkedin.com/in/harshvardhan-sharma-a3685a236/" target='_blank'><i className="fa-brands fa-linkedin"></i></a>
                  </div>
                </div>
              </div>
              <div className="f-about">
                <h3>About Us</h3>
                <ul>
                  <li><a href="#" className='f-link'>Home</a></li>
                  <li><a href="#about" className='f-link'>About</a></li>
                  <li><a href="#service" className='f-link'>Service</a></li>
                  <li><a href="#pages" className='f-link'>Pages</a></li>
                  <li><a href="#footer" className='f-link'>Terms and Conditions</a></li>
                </ul>
              </div>
              <div className="f-service">
                <h3>Services</h3>
                <ul>
                  <li><a href="#footer" className='f-link'>Search Terms</a></li>
                  <li><a href="#footer" className='f-link'>Advanced Search</a></li>
                  <li><a href="#footer" className='f-link'>Privacy Policy</a></li>
                  <li><a href="#footer" className='f-link'>Suppliers</a></li>
                  <li><a href="#footer" className='f-link'>Our Stores</a></li>
                </ul>
              </div>
              <div className="f-address">
                <h3>Contact Us</h3>
                <address>
                  <p><i className="fa-solid fa-location-dot"></i>&nbsp; Lane 1, Subhash Road Dehradun, Uttarakhand, India</p>
                  <p><a href="tel:+9149349278"><i className="fa-solid fa-phone"></i>&nbsp; +9149349278</a></p>
                  <p><a href="mailto:3469harshsharma@gmail.com"><i className="fa-solid fa-envelope"></i>&nbsp; 3469harshsharma@gmail.com</a></p>
                </address>
              </div>
            </div>
          </div>
          <div className="f-credit">
            <div className="container">
              <div className="f-credit-data">
                <p>Copyright ©️ 2024 | Harshvardhan Sharma | All rights reserved.</p>
              </div>
            </div>
          </div>
        </section>
        
    </>
  )
}

export default Home
