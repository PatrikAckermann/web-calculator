import "../CSS/Sidebar.css"
import React from "react"

export default function Sidebar(props) {
    function onSelect(e) {
        props.addWindow(e.target.value)
    } 

    return <div className="Sidebar">
        <div className="Sidebar-Windowlist">

        </div>
        <select className="Sidebar-Button" value="0" onChange={onSelect}>
            <option hidden value="0">Add Window</option>
            <option value="default">Default Calculator</option>
            <option value="unit">Unit Converter</option>
            <option value="currency">Currency Converter</option>
        </select>
    </div>
}