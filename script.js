const gameboard = document.querySelector('.gameboard');

gameboard.addEventListener('click', TakeTurn);


function TakeTurn(e){
 const item = e.target
 let i = item.id

 console.log({item, i})

 
 
}