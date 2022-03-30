import React, { useState } from 'react'
import './App.css';

const input1 = (num1, setNum1) => {
    return (
        <div>
            <label className="form-label" >Primeiro número:</label><input type="text" value={num1} onChange={(e) => { setNum1(Number(e.target.value)) }} />
        </div>
    );
}
const input2 = (num2, setNum2) => {
    return (
        <div>
            <label className="form-label" >Segundo número:</label><input type="text" value={num2} onChange={(e) => { setNum2(Number(e.target.value)) }} />
        </div>
    )
}
const btn = (num1, num2, setResult) => {
    const media = () => {
        setResult((num1 + num2) / 2)
    }
    return (
        <div>
            <div className="overlay"></div><a className="btn btn-primary btn-xl js-scroll-trigger" role="button" href="#about" onClick={media}>Calcular</a>
        </div>
    )
}
const reultado1 = (result) => {
    return (
        <div>
            <h1>A média entre os números é: {result}</h1>
        </div>
    )
}

function App() {
    const [num1, setNum1] = useState();
    const [num2, setNum2] = useState();
    const [result, setResult] = useState(0);

    return (
        <div className="container my-auto text-center" >
            <h1 className="mb-1">Calcula média</h1>
            {input1(num1, setNum1)}
            {input2(num2, setNum2)}
            {btn(num1, num2, setResult)}
            {reultado1(result)}
        </div>

    );
}

export default App;
