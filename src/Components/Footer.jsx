import React from 'react';


const Footer = () => {
  const date = new Date();
  const year=date.getFullYear();

  return (
    <div className="footer-section">
      {/*<div className='reflection'>
        Homework planner
      </div>
      

      <div className='center slider'>
      Make
          <div className='slide'>
            <div><div>Work</div></div>
            <div><div>Everything</div></div>
            <div><div>Lifestyle</div></div>
     
          </div>
          Awesome
      </div>*/}

      
      
<ul className='media'>
<li>©</li>
        <li>Copyright</li>
        <li>{year}</li>
      </ul>
    </div>

  )
}

export default Footer;
