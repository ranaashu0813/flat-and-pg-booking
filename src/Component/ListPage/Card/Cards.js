import React from "react";
import Card from "./Card";
import { FakeData } from "./FakeData";
function Cards(){
    return(
        <>
            {FakeData.map((fakeData)=>{
                return <Card   title={fakeData.title}
                    location={fakeData.location}
                    price={fakeData.price}
                    Amenities={fakeData.Amenities}
                    img={fakeData.img}
                />
            })}
           
        </>
    )
}

export default Cards;