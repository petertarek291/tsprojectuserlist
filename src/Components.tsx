/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import data from "./hard-coded-data";

function getData(){
  const dataStructure = data.map((item) => {
    return (
      <div>
        <img src={item.picture.large}/>
        <h1>
          {item.name.first} {item.name.last}
        </h1>
        </div>
    );
  });
return dataStructure;
}
export default getData;