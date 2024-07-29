import React from 'react'

const Footer = () => {
  return (
    <footer>

      <div id='left-side'>
        <h2> Get In Touch </h2>
        <div className='contact-container'>
          
          <div className='contact-info'>
            <h4> X </h4>
            <p> caitlin.anderson099@gmail.com </p>
          </div>

          <div className='contact-info'>
          <h4> X </h4>
          <p> 027 341 2624 </p>
          </div>

          <div className='contact-info'>
          <h4> X </h4>
          <p> Caitlin Anderson </p>
          </div>
        </div>
      </div>
    

      <div id='right-side'>
        <img src='/img/site-img/portfolio-logo-transparent.png' alt='portfolio logo' id='footer-logo'/>
        <h4> Copyright Caitlin Anderson 2024 </h4>
      </div>

    </footer>
  )
}

export default Footer
