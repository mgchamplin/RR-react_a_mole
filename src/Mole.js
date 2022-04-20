import { useEffect } from "react"

function Mole(props){
    useEffect(()=> {
        let randomSeconds = Math.floor(Math.random() * 2) * 500;      // Random timer
        if (randomSeconds === 0) randomSeconds = 1000;
        console.log("MOLE SECONDS " + randomSeconds)
        let timer = setTimeout(()=> {props.setDisplay(false)}, randomSeconds)

        return ()=> clearTimeout(timer)
    })

    return (
            <img style={{'width':'10vw'}} src="./mole.png" onClick={props.handleClick} alt="NADA"/>
    )
}

export default Mole
