import React from "react";
import "./About.css"
const Container = () => {
  return (
    <>
      <div
        className="path"
        style={{ padding: "2rem", height: "25vh", backgroundColor: "black" }}
      >
        <div className="path-container">
        </div>
        <div
          className="path-container2"
          style={{ textAlign: "center"}}
        >
          <h2 style={{ color: "white", fontSize: "3rem" }}>ABOUT US</h2>
        </div>
        {/* <div className='path-container3' style={{marginTop:"2rem",marginLeft:"23rem",marginRight:"23rem",display:"flex",justifyContent:"center",border:"2px solid white",borderRadius:"23px"}}>
              <div  style={{paddingRight :"33px",fontSize:"2rem",color:"white"}}>The Why</div>
              <div style={{paddingRight :"4px",paddingLeft:"4px",fontSize:"2rem",color:"white"}}>The What</div>
              <div style={{paddingLeft :"41px",fontSize:"2rem",color:"white"}}>The How</div>
           </div> */}
      </div>
      <div
        className="whyinfo"
        style={{
          height: "30rem",
          width: "95vw",
          display: "flex",
          marginTop: "3rem",
          justifyContent: "space-between",
          flex: "1 1 0%",
          padding: "7rem",
          paddingTop: "2rem",
         
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginRight: "6rem",
          }}
        >
          <h2 style={{ fontSize: "2.5rem" }}>
            We didn't find it for us,so{" "}
            <span style={{ color: "skyblue" }}>we created it for you</span>{" "}
          </h2>
          <p style={{ fontSize: "1.5rem" }}>
            That's essentially our story in one sentence. Crammed up hostels or
            cooped up PGs - not much of a choice, is it? Thats why we created
            Stanza Living - a place designed by people who've been in your
            shoes. Understand you. And are inspired by you.
          </p>
        </div>
        <div>
          <img
            style={{ width: "30vw", height: "50vh" }}
            src="img.png"
            alt="..."
          ></img>
        </div>
      </div>

      <div
        className="whyinfo"
        style={{
          height: "30rem",
          display: "flex",
          justifyContent: "space-between",
          flex: "1 1 0%",
          padding: "5rem",
          paddingTop: "2rem",
          marginBottom: "3rem",
        }}
      >
        <div>
          <img
            style={{ width: "25rem", height: "28rem", marginTop: "2rem" }}
            src="pghouse.png"
            alt="..."
          ></img>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "3rem",
            marginLeft: "6rem",
          }}
        >
          <h2 style={{ fontSize: "2.5rem" }}>
            You needed a place like home, so we{" "}
            <span style={{ color: "skyblue" }}>moved back home</span>
          </h2>
          <p style={{ fontSize: "1.5rem" }}>
            That's essentially our story in one sentence. Crammed up hostels or
            cooped up PGs - not much of a choice, is it? Thats why we created
            SIBILIZE - a place designed by people who've been in your
            shoes. Understand you. And are inspired by you.
          </p>
        </div>
      </div>

      {/* food area */}
      <div
        className="whyinfo"
        style={{
          height: "30rem",
          display: "flex",
          justifyContent: "space-between",
          flex: "1 1 0%",
          padding: "7rem",
          paddingTop: "2rem",
          marginBottom: "3rem",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "5rem",
          }}
        >
          <h2 style={{ fontSize: "2.5rem" }}>
            Don't come expecting
            <span style={{ color: "skyblue" }}> "hostel-PG food"</span>{" "}
          </h2>
          <p style={{ fontSize: "1.5rem" }}>
            Instead, bring along a big appetite for healthy, yummy meals. With
            flavours that have a local touch. And that, at the same time, take
            your taste buds on a journey back home.
          </p>
        </div>
        <div>
          <img
            style={{
              width: "25rem",
              height: "28rem",
              marginTop: "2rem",
              marginLeft: "8rem",
            }}
            src="pgfood.png"
            alt="..."
          ></img>
        </div>
      </div>

      {/* chill area */}
      <div
        className="whyinfo"
        style={{
          height: "30rem",
          display: "flex",
          justifyContent: "space-between",
          flex: "1 1 0%",
          padding: "7rem",
          paddingTop: "2rem",
          marginBottom: "3rem",
        }}
      >
        <div>
          <img
            style={{
              width: "25rem",
              height: "28rem",
              marginTop: "2rem",
              marginRight: "6rem",
            }}
            src="chillarea.png"
            alt="..."
          ></img>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "5rem",
          }}
        >
          <h2 style={{ fontSize: "2.5rem" }}>
            Chill in a<span style={{ color: "skyblue" }}> common area</span>{" "}
            that's anything but common
          </h2>
          <p style={{ fontSize: "1.5rem" }}>
            Nope, we don't try to pass off a few plastic chairs and a TV as a
            common area. We've replaced them with sofas, bean bags and
            large-screen TVs. And we've also added gaming zones, fitness centres
            and chillout corners as a bonus.
          </p>
        </div>
      </div>
    </>
  );
};

export default Container;
