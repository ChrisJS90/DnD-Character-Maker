import "./style.css";
import { useState } from "react";
import BasicInfo from "../../components/basicInfo";
import StatList from "../../components/statList";

const Dashboard = () => {
    const [char, setChar] = useState({
               
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

    return (
        <>
            {/* <header></header> */}
            <main>
                <BasicInfo />
                <StatList />

            </main>
        </>
    )
}

export default Dashboard
