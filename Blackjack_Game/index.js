let firstCard=11
let secondCard=10
let sum= firstCard+secondCard
let hasBlackJack= false
let isAlive = true
let message=""

// 2. Reassign the message variable to the string we're logging out
if(sum===21){
  message="Wohoo! You've got the Blackjack!"
  hasBlackJack=true
}
else if(sum<=20){
  message="Do you want to draw a new card?"
}
else{
  message="You're out of the game!"
  isAlive=false
}
console.log(isAlive)

// 3. Log it out!
console.log(message)