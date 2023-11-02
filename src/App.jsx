import React from "react"
import ReactDOM from "react-dom/client"
import "./CSS/index.css"
import Sidebar from "./Components/Sidebar"
import WindowArea from "./Components/WindowArea"

function App() {
    var [id, setId] = React.useState(0)
    var [windows, setWindows] = React.useState([{id: 0, type:"normal", x: 200, y:200, width: 200, height: 200}])

    return <div className="App">
        <Sidebar windows={windows} setWindows={setWindows}/>
        <WindowArea windows={windows} setWindows={setWindows}/>
    </div>
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App/>)