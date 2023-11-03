import React from "react"
import ReactDOM from "react-dom/client"
import "./CSS/index.css"
import Sidebar from "./Components/Sidebar"
import WindowArea from "./Components/WindowArea"

function App() {
    var [id, setId] = React.useState(0)
    var [windows, setWindows] = React.useState([])
    var [activeWindow, setActiveWindow] = React.useState(null)

    function addWindow(type) {setWindows(x => {
        setId(id => id += 1)
        return [...x, {id: id, type: type, x: 100, y: 100, layer: 100000000, name: "Calculator " + id}]
    })}
    
    function deleteWindow(id) {
        setWindows(x => {
            var newWindows = []
            x.forEach(y => {
                if (y.id !== id) {
                    newWindows.push(y)
                }
            })
            return newWindows
        })
    }

    function moveToTop(id) {
        if (activeWindow !== id) {
            setActiveWindow(id)

            setWindows(x => {
                return x.map(y => {
                    y.layer -= 1
                    if (y.id === id) {
                        y.layer = 100000000
                    }
                    return y
                })
            })
        }
    }

    console.log("APP RELOAD", windows)

    return <div className="App">
        <Sidebar windows={windows} setWindows={setWindows} addWindow={addWindow} deleteWindow={deleteWindow} moveToTop={moveToTop}/>
        <WindowArea windows={windows} setWindows={setWindows} deleteWindow={deleteWindow} moveToTop={moveToTop}/>
    </div>
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App/>)