import React from 'react'
// import { render } from 'react-dom'
// import { Icon } from "leaflet";
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import "./style/mainscreen.css";

// const wedding = new Icon({
//     iconUrl:'/img2.png',
//     iconSize:'[.2,.1]'
    
// });

const position = [28.399770, 77.038603]
const map = (
  <Map center={position} zoom={11}>
    <TileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
    />
    <Marker position={position} >  
    {/* icon= {wedding} */}
      <Popup>You need to come here:<br /> <a href="https://www.google.com/maps/place/Kohli's+Regency/@28.399529,77.0364469,17z/data=!4m5!3m4!1s0x390d230b4776dd85:0xe84da5ecc33676fa!8m2!3d28.3995243!4d77.0386356"><b>Kohli's regency</b></a></Popup>
    
    </Marker>
  </Map>
)

export default   function MapCreation(props) {

    return (
    <div>{map}</div>
    )
}

// render(map, document.getElementById('map-container'))