function getRandom(max) {
    return Math.floor(Math.random() * max);
}

function removeSmallest(arr) {
    let min = Math.min(...arr);
    return arr.filter(e => e != min);    
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

export default StatRoller