import { useState } from 'react'
import Mole from "./Mole"
import EmptySlot from './EmptySlot';

function MoleContainer(props){
    let [displayMole, setDisplayMole] = useState(false)

    const bopTheMole = () => {
        props.setScore(props.score+1)
        setDisplayMole(false)
    }

    const setTheDisplayMode = (isOn) => {
        setDisplayMole(isOn)
    }

    return (
            displayMole ? <Mole        setDisplay={setTheDisplayMode} handleClick={bopTheMole} /> : 
                            <EmptySlot  setDisplay={setTheDisplayMode}/>
    )
}

export default MoleContainer
