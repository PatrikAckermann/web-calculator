import React from "react";
import "../CSS/Calculator.css"

export default function Calculator(props) {
    var buttons = [{text: "(", char: "("}, {text: ")", char: ")"}, {text: "C", char: "CLEAR"}, {text: "<", char: "DELETE"}, {text: "^", char: "**"}, {text: "↓", char: "ROOT"}, {text: "%", char: "%"}, {text: "/", char: "/"}, {text: "7", char: "7"}, {text: "8", char: "8"}, {text: "9", char: "9"}, {text: "X", char: "*"}, {text: "4", char: "4"}, {text: "5", char: "5"}, {text: "6", char: "6"}, {text: "-", char: "-"}, {text: "1", char: "1"}, {text: "2", char: "2"}, {text: "3", char: "3"}, {text: "+", char: "+"}, {text: "+-", char: "INVERT"}, {text: "0", char: "0"}, {text: ".", char: "."}, {text: "=", char: "CALC"}]
    var [calculation, setCalculation] = React.useState("")
    var [calculated, setCalculated] = React.useState()

    function addChar(char) {
        if (char === "CALC") {
            setCalculation(calculated)
        } else if (char === "INVERT") {
            alert("Feature not implemented yet")
        } else if (char === "CLEAR") {
            setCalculation("")
        } else if (char === "DELETE") {
            setCalculation(x => x.slice(0, -1))
        }else if (char === "ROOT") {
            alert("Feature not implemented yet")
        } else {
            setCalculation(x => x + char)
        }
    }

    React.useEffect(() => {
        try {
            setCalculated(eval(calculation))
        } catch {
            console.log("COULDNT CALCULATE")
        }
    }, [calculation])

    return <div className="Calculator">
        <div className="Calculator-Display">
            <div className="Calculator-Display-Top">
                <p className="Calculator-Display-Text">{calculation}</p>
            </div>
            <p className="Calculator-Display-Text">{calculated}</p>
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

/* 
How to do root
square root: ^(1/2)
3: ^(1/3)
etc
*/