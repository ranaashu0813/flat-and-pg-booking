import React  from 'react'
import './Mainnavbar.css'
const Mainnavbar = () => {
  // const[isMobile, setIsMobile]= useState(false);
  return (
    <>
      <nav className="navbarrr ">
      {/* <ul className={isMobile ?"navbar-nav-mobile": "navbar-navv"} */}
      <ul className='navbar-navv'>
      {/* onClick={()=> setIsMobile(false)}> */}
        <li className="nav-itemm">
          <a className="nav-link" href="/">Home</a>
        </li>
        <li className="nav-itemm">
          <a className="nav-link" href="/about">About Us</a>
        </li>
        <li className="nav-itemm">
          <a className="nav-link" href="/">Add Your Property</a>
        </li>
        <li className="nav-itemm">
          <a className="nav-link" href="/">Support</a>
        </li>
        <li className="nav-itemm">
          <a className="nav-link" href="/">Contact Us</a>
        </li>
      </ul>
      {/* <button className="mobile-menu-icon"
      onClick={()=> setIsMobile(!isMobile)}>
        {isMobile ? (<i className="fa-solid fa-xmark"></i>): (<i className="fa-sharp fa-solid fa-bars"></i>)}
      </button> */}
    </nav>
    </>
  )
}

export default Mainnavbar