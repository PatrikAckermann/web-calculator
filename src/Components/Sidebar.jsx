import "../CSS/Sidebar.css"
import React from "react"

export default function Sidebar(props) {
    function onSelect(e) {
        props.addWindow(e.target.value)
    } 

    function onClick(id) {
        props.moveToTop(id)
        props.showWindow(id)
    }

    var windows = props.windows.map(x => {
        return <div className="Sidebar-Button" onClick={() => onClick(x.id)}><p className="Sidebar-Button-Text">{x.name}</p><p className="Sidebar-Button-Close" onClick={() => props.deleteWindow(x.id)}>x</p></div>
    })

    return <div className="Sidebar">
        <div className="Sidebar-Windowlist">
            {windows}
        </div>
        <select className="Sidebar-Button" value="0" onChange={onSelect}>
            <option hidden value="0">Add Window</option>
            <option value="default">Default Calculator</option>
            <option value="unit">Unit Converter</option>
            <option value="currency">Currency Converter</option>
        </select>
    </div>
}

function windowButton(props) {
    return <div>

    </div>
}