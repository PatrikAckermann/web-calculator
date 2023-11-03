import "../CSS/WindowArea.css"
import React from "react"
import Window from "./Window"

export default function WindowArea(props) {
    var elements = props.windows.map(x => {
        console.log(x)
        return <Window onclick={props.moveToTop} style={{x: x.x, y: x.y, zIndex: x.layer}} x={x.x} y={x.y} setWindows={props.setWindows} id={x.id} name={x.name} deleteWindow={props.deleteWindow}/>
    })

    return <div className="WindowArea">
        {elements}
    </div>
}