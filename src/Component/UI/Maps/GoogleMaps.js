import React from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => (
    <div style={{
      color: 'white', 
      background: 'grey',
      padding: '15px 10px',
      display: 'inline-flex',
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '100%',
      transform: 'translate(-50%, -50%)'
    }}>
      {text}
    </div>
  );
  
  export default function SimpleMap (){
    const defaultProps = {
      center: {lat: 28.704060, lng: 77.102493},
      zoom: 11
    };
  
      return (
        <div style={{width:"100%",height:"100%" }} >
         <GoogleMapReact
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <AnyReactComponent 
            lat={28.704060} 
            lng={77.102493} 
            text={'Kreyser Avrora'} 
          />
        </GoogleMapReact>
        </div>
      );
    }