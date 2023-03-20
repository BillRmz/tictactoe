const board = ["-", "-", "-",
         "-", "-", "-",
         "-", "-", "-"] 

function PrintBoard (){

    console.log(board[0] + " | " + board[1] + " | " + board[2])
    console.log(board[3] + " | " + board[4] + " | " + board[5])
    console.log(board[6] + " | " + board[7] + " | " + board[8])
    
}

function takeTurn(player){
    console.log(`${player}'s Turn`)
    position = parseInt(prompt(`${player} Select Position`))
    while( position <= 0 || position > 9 ){
        position = prompt('Select a valid position')
    }
    position = parseInt(position) - 1
    while(board[position] != "-"){
    position = parseInt(prompt("Position already taken. Choose a different position: "))-1
}
board[position] = player
}


function check_game_over(){

    if( 
        (board[0] === board[1] && board[1] === board[2]) && (board[0,1,2].includes('-') === false) ||
	    (board[3] === board[4] && board[4] === board[5]) && (board[3,4,5].includes('-') === false) ||
	    (board[6] === board[7] && board[7] === board[8]) && (board[6,7,8].includes('-') === false) ||
	    (board[0] === board[3] && board[3] === board[6]) && (board[0,3,6].includes('-') === false) ||
	    (board[1] === board[4] && board[4] === board[7]) && (board[1,4,7].includes('-') === false) ||
	    (board[2] === board[5] && board[5] === board[8]) && (board[2,5,8].includes('-') === false) ||
	    (board[0] === board[4] && board[4] === board[8]) && (board[0,4,8].includes('-') === false) ||
	    (board[2] === board[4] && board[4] === board[6]) && (board[2,4,6].includes('-') === false)  ) 
    {
        
        return "win"
     } else if (board.includes("-") === false){
        return "tie"
     }
     else{
        return "play"
     }
    

}

function playGame(){
    PrintBoard()
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

