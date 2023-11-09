import React from "react";
import "../CSS/Calculator.css"

export default function Calculator(props) {
    var buttons = [{text: "%", char: "%"}, {text: "^", char: "^"}, {text: "C", char: "CLR"}, {text: "/", char: "/"}, {text: "7", char: "7"}, {text: "8", char: "8"}, {text: "9", char: "9"}, {text: "X", char: "*"}, {text: "4", char: "4"}, {text: "5", char: "5"}, {text: "6", char: "6"}, {text: "-", char: "-"}, {text: "1", char: "1"}, {text: "2", char: "2"}, {text: "3", char: "3"}, {text: "+", char: "+"}, {text: "+-", char: "INVRT"}, {text: "0", char: "0"}, {text: ".", char: "."}, {text: "=", char: "CALC"}]
    
    function addChar(char) {
        
    }

    return <div className="Calculator">
        <div className="Calculator-Display">
            <div className="Calculator-Display-Top">
                <p className="Calculator-Display-Top-Text"></p>
            </div>
            <p className="Calculator-Display-Text"></p>
        </div>
        <div className="Calculator-Buttons">
            {buttons.map(b => {
                return <div className="CalcButton" onClick={() => addChar(b.char)}>
                    <p>{b.text}</p>
                </div>
            })}
        </div>
    </div>
}