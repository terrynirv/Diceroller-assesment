let rollButton = document.querySelector('#dice-roller')
let showallButtin = document.querySelector('#show-all-results')
let dieRolls = [] 
let rollResults = document.querySelector('#total-results')  
let allRollsElement = document.querySelector('#all-rolls')
const dieQuant = document.querySelector('#dice')
rollButton.addEventListener("click", function () {
    
    const die = dieQuant.value
    console.log(die)
    let counter = 1
    let rollResults = 0
    while (counter <= die) { 
        const numberRolled = Math.floor(Math.random() * 6) + 1;
        dieRolls.push(numberRolled)
        counter += 1;
        rollResults = numberRolled +rollResults
        console.log(rollResults)
        
        
    }
    
        document.body.innerHTML += "Total: " + rollResults 
       console.log(dieRolls)
    
})
showallButtin.addEventListener("click",function () {
    let counter2 = 0
    console.log('button')
    while (counter2 <= dieRolls.length) {
        let newDiceString = '<li class="dice">' + dieRolls[counter2] + '</li>';
        allRollsElement.innerHTML += newDiceString;
        console.log(newDiceString)
        counter2 += 1;
    }
    
})
/*const newDiceString = '<li class="dice">' + numberRolled + "</li>";
allRollsElement.innerHTML += newDiceString;*/