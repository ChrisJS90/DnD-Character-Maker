import { useState } from "react"
import "./style.css"

const BasicInfo = () => {
    const [info, setInfo] = useState({
        name : "",
        charClass : "",
        background : "",
        playerName : "",
        race : "",
        alignment : "", 
    })
    return (
        <section className="basicInfo">
            <div className="charName">
                {/* get from props of character state */}
                <input
                    type = "text"
                    placeholder="Character Name" 
                />
            </div>
            <div className="charDetails">
                <div>
                    {/* class and level */}
                    <select>
                        <option value="Fighter">Fighter</option>
                        <option value="Wizard">Wizard</option>
                        <option value="Rogue">Rogue</option>
                    </select>
                </div>
                <div >
                    {/* background */}
                    <select></select>
                </div>
                <div> 
                    {/* player name */}
                    <input 
                        type="text"
                        placeholder="Player Name"
                    />
                </div>
                <div>
                    {/* race */}
                    <select>
                        <option value="Human">Human</option>
                        <option value="Elf">Elf</option>
                        <option value="Dwarf">Dwarf</option>
                    </select>
                </div>
                <div>
                    {/* alignment */}
                    <select>
                        <option value="LawfulGood">Lawful Good</option>
                        <option value="NeutralGood">Neutral Good</option>
                        <option value="ChaoticGood">Chaotic Good</option>
                        <option value="LawfulNeutral">Lawful Neutral</option>
                        <option value="TrueNeutral">True Neutral</option>
                        <option value="ChaoticNeutral">Chaotic Neutral</option>
                        <option value="LawfulEvil">Lawful Evil</option>
                        <option value="NeutralEvil">Neutral Evil</option>
                        <option value="ChaoticEvil">Chaotic Evil</option>
                    </select>
                </div>
                <div>
                    {/* xp */}
                </div>
            </div>
        </section>
    )
}

export default BasicInfo