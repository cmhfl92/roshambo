const $ = s => document.querySelector(s)
const $$ = s => document.querySelectorAll(s)

const playerIncrement = () => {
  console.log('player wins')
  const playerScoreText = $('.scores .player').textContent
 // Convert that to a number
  const playerScore = parseInt(playerScoreText) + 1
 // Add one to it
 // Put it back on screen
  $('.scores .player').textContent = playerScore

  $('figure.player').className = 'player win'
  $('figure.computer').className = 'computer lose'

  if (playerScore === 3) {
    gameOver(true)
  }
}

const computerIncrement = () => {
  console.log('computer wins')
  const computerScoreText = $('.scores .computer').textContent
  const computerScore = parseInt(computerScoreText) + 1
  $('.scores .computer').textContent = computerScore

  $('figure.computer').className = 'computer win'
  $('figure.player').className = 'player lose'

  if (computerScore === 3) {
    gameOver(false)
  }
}

const handleButtonClick = (event) => {
  const player = event.target.className
  const computer = getComputerMove()
  $('figure.player img').src = `/images/${player}.svg`
  $('figure.computer img').src = `/images/${computer}.svg`

  console.log('player is', player)
  console.log('computer is', computer)

  if (player === 'rock' && computer === 'paper') {
    computerIncrement()
  }
  if (player === 'rock' && computer === 'rock') {
    console.log('it\'s a draw')
    $('figure.computer').className = 'computer draw'
    $('figure.player').className = 'player draw'
  }
  if (player === 'rock' && computer === 'scissors') {
    playerIncrement()

    $('.scores .player').textContent = newPlayerScore
    playerIncrement()
  }
  if (player === 'paper' && computer === 'paper') {
    console.log('it\'s a draw')
    $('figure.computer').className = 'computer draw'
    $('figure.player').className = 'player draw'
  }
  if (player === 'paper' && computer === 'rock') {
    playerIncrement()
  }
  if (player === 'paper' && computer === 'scissors') {
    computerIncrement()
  }
  if (player === 'scissors' && computer === 'paper') {
    playerIncrement()
  }
  if (player === 'scissors' && computer === 'rock') {
    computerIncrement()
  }
  if (player === 'scissors' && computer === 'scissors') {
    console.log('it\'s a draw')
    $('figure.computer').className = 'computer draw'
    $('figure.player').className = 'player draw'
  }

//   // HINT: Check for win, lose or draw, then call `gameOver()` eventually.

  if (player === 'rock' && computer === 'rock') {
    console.log('it\'s a draw')
    $('figure.computer').className = 'computer draw'
    $('figure.player').className = 'player draw'
  }
}

const getComputerMove = () => {
  const moves = ['rock', 'paper', 'scissors']
  return moves[Math.floor(Math.random() * moves.length)]
}

// HINT: Try calling `gameOver(true)` in the console.
const gameOver = (playerDidWin) => {
  if (playerDidWin) {
    $('.dialog h3').textContent = 'You won!'
  } else {
    $('.dialog h3').textContent = 'You lost!'
  }
  $('body').className = 'modal'

  $('.scores .computer').textContent = 0
  $('.scores .player').textContent = 0
}

const resetGame = () => {
  // TODO: Probably need to do more to reset the game here...
  $('figure.player img').src = '/images/unknown.svg'
  $('figure.computer img').src = '/images/unknown.svg'
  $('body').className = ''
}

const main = () => {
  const buttons = $$('.player-input button')
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', handleButtonClick)
  }
  $('.dialog button').addEventListener('click', resetGame)
}

document.addEventListener('DOMContentLoaded', main)
