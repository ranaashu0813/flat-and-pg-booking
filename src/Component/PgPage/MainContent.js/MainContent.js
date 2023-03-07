import React from "react";
import Footer from "../../footer/down_part";
import ReserveModal from "../../ListPage/Card/ReserveModal";
import ScheduleModal from "../../ListPage/Card/ScheduleModal";
import Crousel from "../../UI/Crousel/Crousel";
import Navbar from "../Navbar/Navbar";
import Photo from "../Photo/Photo";
import SmoothScroll from "../SmoothScroll/SmoothScroll";
import "./mainContent.css";

function MainContent() {
  return (
    <>
      <div className="item-container">
      <div style={{marginLeft:"20px",marginRight:"20px"}}>
        <Navbar />

      </div>
        <div style={{backgroundColor:"#ECECEC "}}>
        <div
          style={{ display: "flex", justifyContent: "center", margin: "50px" }}
        >
          <div style={{ display: "flex", width: "100%", gap: "0px" }}>
            <div style={{ flex: "2", marginTop: "30px" }}>
            <div style={{display:"flex",justifyContent:"space-between"}}>
              <h1>Title</h1>
              <Photo/>

            </div>
              <p>address</p>
              <p>starts from</p>
              <p>$1300</p>
              <p>
                *Denotes starting price (exclusive of GST) for 7-9 months’ stay.
                Prices may vary with tenure, room occupancy, and attributes.
              </p>
              <ReserveModal />
              <ScheduleModal />
            </div>
            <div
              style={{
                flex: "2",
                position: "sticky",
                padding: "10px",
                top: "0",
              }}
            className="Crousel1">
              <Crousel />
            </div>
          </div>
        </div>
        </div>
        <SmoothScroll/>
      </div>
      <div style={{marginTop:"5rem"}}>
      <Footer/>

      </div>
    </>
  );
}

export default MainContent;
