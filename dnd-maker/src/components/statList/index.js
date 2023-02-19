import { useState } from "react"
import "./style.css"

function getRandom(max) {
    return Math.floor(Math.random() * max);
}

function removeSmallest(arr) {
    let min = Math.min(...arr);
    return arr.filter(e => e !== min);    
}

const StatRoller = () => {
    let statRolls = []
    let stat = 0
    for (let i = 1; i <= 4; i++) {
        statRolls.push(getRandom(6))
    }
    removeSmallest(statRolls);
    for (let i = 0; i < statRolls.length; i++) {
        stat += statRolls[i];      
    }
    return stat
}

const StatList = () => {
    const [stats, setStats] = useState({
        str : "",
        dex : "",
        con : "",
        int : "",
        wis : "",
        cha : "",
    })
    return(
        <section>
            <div className="stat">
                {/* strength */}
                <p>{stats.str}</p>
                <p>Strength</p>
                <button onClick={StatRoller}></button>
            </div>
            <div className="stat">
                {/* dex */}
                <p>{stats.dex}</p>
                <p>Dexterity</p>
                {/* <button onClick={StatRoller(setStats)}></button> */}

            </div>
            <div className="stat">
                {/* constitution */}
                <p>{stats.con}</p>
                <p>Constitution</p>
                {/* <button onClick={StatRoller(setStats)}></button> */}

            </div>
            <div className="stat">
                {/* int */}
                <p>{stats.int}</p>
                <p>Intelligence</p>
                {/* <button onClick={StatRoller(setStats)}></button> */}

            </div>
            <div className="stat">
                {/* wis */}
                <p>{stats.wis}</p>
                <p>Wisdom</p>
                {/* <button onClick={StatRoller(setStats)}></button> */}

            </div>
            <div className="stat">
                {/* charisma */}
                <p>{stats.cha}</p>
                 <p>Charisma</p>
                {/* <button onClick={StatRoller(setStats)}></button> */}

            </div>

        </section>
    )
}

export default StatList