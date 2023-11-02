import "../CSS/WindowArea.css"
import React from "react"
import Window from "./Window"

export default function WindowArea(props) {
    var [activeWindow, setActiveWindow] = React.useState(null)

    function onclick(id) {
        if (activeWindow !== id) {
            console.log("HAHADHFJF")
            setActiveWindow(id)

            props.setWindows(x => {
                return x.map(y => {
                    y.layer -= 1
                    if (y.id === id) {
                        y.layer = 100000000
                    }
                    return y
                })
            })

            console.log(props.windows)
        }
    }

    var elements = props.windows.map(x => {
        console.log(x)
        return <Window onclick={onclick} style={{x: x.x, y: x.y, zIndex: x.layer}} x={x.x} y={x.y} setWindows={props.setWindows} id={x.id} name={x.name}/>
    })

    return <div className="WindowArea">
        {elements}
    </div>
}