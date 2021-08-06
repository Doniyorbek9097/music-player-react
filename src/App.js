import React from "react";
import "./style.css";
import { ImPrevious,ImNext,ImPause,ImPlay } from "react-icons/Im";
export default function App() {
  return (
    <div className="player-app">
    
    <div className="music-img-box">
      <img src="https://images.axios.com/TJZo5yqHzpf3CX8_A4ah21Hy3UM=/0x0:5000x2813/1920x1080/2018/04/11/1523479224025.jpg" alt="Music Image" id="musicImg"/>
    </div>

    <div className="music-slider-box">
      <input type="range" id="sliderRange"/>
      <div className="slider-time-box">
        <span>00:00</span>
        <span>03:00</span>
      </div>
    </div>

    <div className="btn-box">
    <ImPrevious/>
    <ImPause/>
    <ImPlay/>
    <ImNext/>
    </div>

    </div>
  );
}
