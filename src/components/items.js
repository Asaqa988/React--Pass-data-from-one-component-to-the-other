import React from "react";

import '../components/items.css'

function MyItems(props) {
    return ( <div id="container-div">

        <h1 id="MyH1"> {props.title}</h1> 
        <img id="MyImage" src={props.image}/>
        <b id="MyB"> {props.MyPrice} </b>
        <p id="MyP"> {props.color}  </p>
    </div>  );
}

export default MyItems; 