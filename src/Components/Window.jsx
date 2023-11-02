import React from "react";
import ReactDOM from "react-dom/client";
import "../CSS/Window.css"
import Draggable from "@tdaniil/react-draggable";

export default function Window(props) {
    function onStop(e, dragElement) {
        props.setWindows(x => {
            x = x.map(y => {
                if (y.id === props.id) {
                    console.log("TRUE")
                    y.x = dragElement.x
                    y.y = dragElement.y
                }
                return y
            })
            return [...x]
        })
    }

    return <Draggable bounds="parent" position={{x: props.x, y: props.y}} onStop={onStop} handle=".Window-Header" cancel=".Window-Header-Buttons"><div className="Window" style={props.style}>
        <div className="Window-Header">
            <p>Calculator</p>
            <div className="Window-Header-Buttons">
                <button className="Window-Header-Buttons-Minimize">-</button>
                <button className="Window-Header-Buttons-Close">X</button>
            </div>
        </div>
    </div></Draggable>
}