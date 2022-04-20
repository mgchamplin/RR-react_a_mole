import { useEffect } from "react"

function EmptySlot(props){
    useEffect(()=> {
        let randomSeconds = Math.floor(Math.random() * 8) * 500;      // Random timer
        if (randomSeconds === 0) randomSeconds = 1000;
        console.log("EMPTY SECONDS " + randomSeconds)

        let timer = setTimeout(()=> {console.log("FIRED"); props.setDisplay(true)}, randomSeconds)

        return ()=> clearTimeout(timer)
    })

    return (
            <img style={{'width':'10vw'}} src="./molehill.png" alt="NADA"/>
    )
}

export default EmptySlot