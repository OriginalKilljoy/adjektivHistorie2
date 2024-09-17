//VIEW - Det grafiske vi viser frem

updateView()

function updateView(){
    document.getElementById('app').innerHTML = /*HTML*/`
    <div>Det var en gang en ${chosenAdjective[0]} katt som gikk en ${chosenAdjective[1]} tur.<br> 
        På turen møtte katten en ${chosenAdjective[2]} kanin som sa:<br>
        "Hei du, du så veldig ${chosenAdjective[3]} ut i dag!"<br>
        "Jasså?" svarte katten, og gjorde seg så ${chosenAdjective[4]} som bare mulig.</div>
    <button onclick="placeAdjective(this)">søt</button>
    <button onclick="placeAdjective(this)">ekkel</button>
    <button onclick="placeAdjective(this)">susete</button>
    <button onclick="placeAdjective(this)">illeluktende</button>
    <button onclick="placeAdjective(this)">snill</button>
    <button onclick="placeAdjective(this)">rar</button>
    <button onclick="placeAdjective(this)">morsom</button>
    <button onclick="placeAdjective(this)">spirituell</button>
    
    `
}