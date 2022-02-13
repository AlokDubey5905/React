//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
import React from "react";
import ReactDOM from "react-dom";

const time = new Date();
const hr = time.getHours();
const customstyle = {
  color: "red"
};
var wish = "";

if (hr >= 0 && hr < 12) {
  wish = "Good Morning";
} else if (hr >= 12 && hr < 18) {
  wish = "Good Afternoon";
  customstyle.color = "green";
} else {
  wish = "Good Evening";
  customstyle.color = "blue";
}

ReactDOM.render(
  <div className="heading">
    <h1 style={customstyle}>{wish}</h1>
  </div>,
  document.getElementById("root")
);
