const gameboard = document.querySelector('.gameboard');

gameboard.addEventListener('click', TakeTurn);


function TakeTurn(e){
 const item = e.target
 let i = item.cellIndex
 console.log({item, i})

 
 
}