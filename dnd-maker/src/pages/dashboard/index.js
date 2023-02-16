import "./style.css"
import { useState } from "react"

const Dashboard = () => {
    const [char, setChar] = useState({
        name : "",
        charClass : "",
        background : "",
        playerName : "",
        race : "",
        alignment : "",
        stats : {
            str : "",
            dex : "",
            con : "",
            int : "",
            wis : "",
            cha : "",
        },
        saveThrows : {
            str : "",
            dex : "",
            con : "",
            int : "",
            wis : "",
            cha : "",
        },
        skills : {
            acrobatics : "",
            animHand : "",
            arcane : "",
            athl : "",
            decep : "",
            hist : "",
            insight : "",
            intimid : "",
            invest : "",
            med : "",
            nature : "",
            percep : "",
            perf : "",
            pers : "",
            religion : "",
            sOfH : "",
            stealth : "",
            surv : "",
        }
    

    })
}