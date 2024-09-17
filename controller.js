//CONTROLLER - Funksjonene som oppdaterer det som skjer på siden

function placeAdjective(word){
    if (currentAdjective < chosenAdjective.length){
        chosenAdjective[currentAdjective] = word.innerHTML
        currentAdjective++
    }
    updateView()
}