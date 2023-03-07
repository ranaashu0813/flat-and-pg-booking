import React , {useState} from 'react'
import './Navbar.css'
import { useNavigate } from "react-router-dom";
const Navbar = () => {
    const navigate = useNavigate(""); 
    const gotohome =()=>{
      navigate('/');
    }
  const [show ,updateShow] = useState(false);
  const[know , updateknow] = useState(false);
  return (
    <>
  
    <div className="max-width navbars">
       
      <img src="/sibilize_logo.png" alt="siblize-logo"
      className="header-logo" onClick={gotohome}/>
    
    
    <div className="navbar-centerr">
        <div className="navbar-center-search-containerr">
            <div className="property-types">
                <div className="containers choose_property">
                <span className="cpt" >Choose property type</span>
                <span className="sup">Select Your Property</span>
                </div>
                {
                  show && <div className="Active_container">
                    <h4> <a href="#">Modern house</a></h4>
                    <h4><a href="#">Co-living professionals</a></h4>
                    <h4><a href="#">Manages Apartment</a></h4>
                  </div>
                }
                <div className="drop-down-icon  icon">
                <i className="fa-sharp fa-solid fa-caret-down"onClick={()=>updateShow(!show)}></i>
                </div>
                <div className="seperators"></div>
                <div className="location-search-bars">
                <div className="containers">
                <span className="cpt" >Find In and Around</span>
                <span className="sup">Enter college/office/city/Locality</span>
                </div>
                <div className="search-icon icon">
                <i className="fa-solid fa-magnifying-glass"></i>

                </div>
            </div>
           
            </div>
             

        </div>
    </div>
    <div className="navbar-rightside">
    <div className="knowmoreee" onClick={()=>updateknow(!know)}>
                <span className="knowmore-head" >Know more</span>
                <div className="drop-downs icon" >
                <i className="fa-sharp fa-solid fa-caret-down"></i>
                </div>
                {
                  know && <div className="Active_know_container">
                    <h4> <a href="/about">About us</a></h4>
                    <h4><a href="/about">Our Team</a></h4>
                    <h4><a href="/about">Partner with us</a></h4>
                  </div>
                }
             </div>
             <div className="calls">
                <div className=" whatsapp-logo">
                <i className="fa-brands fa-whatsapp"></i>
                </div>
                <span className="requests"> Request A Callback</span>
             </div>
    </div>
    
    </div>
    </>
  )
}

export default Navbar
