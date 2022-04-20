import './App.css';
import MoleContainer from './MoleContainer';

import { useState } from 'react'

function App(){
    let [score, setScore] = useState(0)

    const createMoleHill = () => {
        let hills = []
        for (let i = 0; i < 4; i++) {
            hills.push(
                <MoleContainer
                key={i}
                setScore={setScore}
                score={score} />
            )
        }
    
        return (
            <div>
                {hills}
            </div>
        )
    }

    return (
        <div className="App">
            <h1>React-a-Mole!</h1>
            <h2>Your Score: {score}</h2>
            <div id="mole-flex">{createMoleHill()}</div>
        </div>
    )
}

export default App
//
//            <div id="mole-flex">
//                <div><img style={{'width':'10vw'}} src="./mole.png" alt="NADA"/></div>
//                <div><img style={{'width':'10vw'}} src="./mole.png" alt="NADA"/></div>
//                <div><img style={{'width':'10vw'}} src="./mole.png" alt="NADA"/></div>
//            </div>

