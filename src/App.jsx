import React from "react"
import ReactDOM from "react-dom/client"
import "./CSS/index.css"
import Sidebar from "./Components/Sidebar"
import WindowArea from "./Components/WindowArea"

function App() {
    return <div>
        <Sidebar/>
        <WindowArea/>
    </div>
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App/>)