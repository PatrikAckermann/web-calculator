import React from "react"
import ReactDOM from "react-dom/client"
import "./CSS/index.css"
import Sidebar from "./Components/Sidebar"
import WindowArea from "./Components/WindowArea"

function App() {
    var [id, setId] = React.useState(0)
    var [windows, setWindows] = React.useState([])
    function addWindow(type) {setWindows(x => {
        setId(id => id += 1)
        return [...x, {id: id, type: type, x: 100, y: 100, layer: 100000000, name: "Calculator"}]
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

    console.log("APP RELOAD", windows)

    return <div className="App">
        <Sidebar windows={windows} setWindows={setWindows} addWindow={addWindow} deleteWindow={deleteWindow}/>
        <WindowArea windows={windows} setWindows={setWindows} deleteWindow={deleteWindow}/>
    </div>
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App/>)