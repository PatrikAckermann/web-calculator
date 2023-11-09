import React from "react";
import ReactDOM from "react-dom/client";
import "../CSS/Window.css"
import Draggable from "@tdaniil/react-draggable";
import Calculator from "./Calculator";

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

    console.log("RELOADING WINDOW")

    return <Draggable bounds="parent" position={{x: props.x, y: props.y}} onStop={onStop} onStart={() => props.onclick(props.id)} handle=".Window-Header" cancel=".Window-Header-Buttons"><div className="Window" style={props.style} onClick={() => props.onclick(props.id)}>
        <div className="Window-Header">
            <p>{props.name}</p>
            <div className="Window-Header-Buttons">
                <button className="Window-Header-Buttons-Minimize" onClick={() => props.hideWindow(props.id)}>-</button>
                <button className="Window-Header-Buttons-Close" onClick={() => props.deleteWindow(props.id)}>X</button>
            </div>
        </div>
        {props.type === "default" ? <Calculator/> : ""}
    </div></Draggable>
}