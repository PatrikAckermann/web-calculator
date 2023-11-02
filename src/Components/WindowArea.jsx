import "../CSS/WindowArea.css"
import React from "react"
import Window from "./Window"

export default function WindowArea(props) {

    var elements = props.windows.map(x => {
        return <Window style={{width: x.width, height: x.height}} x={x.x} y={x.y} setWindows={props.setWindows} id={x.id}/>
    })

    return <div className="WindowArea">
        {elements}
    </div>
}