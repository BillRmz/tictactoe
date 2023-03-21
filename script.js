//Element selection 

const gameboard = document.querySelector('.gameboard');
const info = document.querySelector('#player');

//Listeners 
gameboard.addEventListener('click', takeTurn);

function takeTurn(e){
    const item = e.target
    let i = item.id
   
    info.textContent = 'o'
    position = parseInt(i)

    let player =  'X'
    let gameOver = false
    
    while(gameOver != true){
        takeTurn(player)
        gameResult = check_game_over();
        if (gameResult == 'win'){
            console.log(`${player} Wins`)
            PrintBoard()
            gameOver = true
        }else if (gameResult == 'tie'){
            console.log('Tie')
            gameOver = true
        }else{
            if(player === 'X'){
                player = 'O'
                PrintBoard()
            }else{
                player = 'X'
                PrintBoard()
            }
        }
    }


}