

const clickMeButton = document.querySelector('.clickMe');

const heading = document.getElementById('heading')

clickMeButton.addEventListener('click' , function(){
    const dicep1 = Math.floor(Math.random() * 6)+1;
    const player1 = `/diceGame/images/dice${dicep1}.png`;
    document.getElementById('check1').setAttribute('src' , player1)
    
    const dicep2 = Math.floor(Math.random() * 6)+1;
    const player2 = `/diceGame/images/dice${dicep2}.png`;
    document.getElementById('check2').setAttribute('src', player2)


    if(dicep1 > dicep2)
    {
        heading.innerHTML = "Player 1 is Winner"
    }
    else if(dicep1 < dicep2)
    {
        heading.innerHTML = "Player 2 is Winner"
        
    }
    else{
        heading.innerHTML = "Its a TIE"
    }
})