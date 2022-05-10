'use strict'

let secretNumber = Math.trunc(Math.random() * 20) + 1
let score = 20
let highScore = 0
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message
}
const bodyColor = function (body) {
  document.querySelector('body').style.backgroundColor = body
}
const numberContent = function (numberText) {
  document.querySelector('.number').textContent = numberText
}
const numberStyle = function (numberStyle) {
  document.querySelector('.number').style.width = numberStyle
}
const highscoreClass = function (highscoreClass) {
  document.querySelector('.highscore').textContent = highscoreClass
}
const scoreClass = function (scoreClass) {
  document.querySelector('.score').textContent = scoreClass
}
const guessValue = function (guessValue) {
  document.querySelector('.guess').value = guessValue
}

// Code of the check input field functionalitites
document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value)

  //  When there is no input
  if (!guess) {
    displayMessage('No number!')
  }
  // When player wins
  else if (guess === secretNumber) {
    displayMessage('Correct Number!')
    bodyColor('#60b347')
    numberStyle('30rem')
    numberContent(secretNumber)
    if (score > highScore) {
      highScore = score
      highscoreClass(highScore)
    }
  }

  // When guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!')
      score--
      scoreClass(score)
    } else {
      displayMessage('You lose! Try Again!')
      scoreClass(0)
    }
  }

  // // When the guess is too high
  // else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too high!'
  //     score--
  //     document.querySelector('.score').textContent = score
  //   } else {
  //     document.querySelector('.message').textContent = 'You lose! Try Again!'
  //     document.querySelector('.score').textContent = 0
  //   }
  // }
  // // When the guess is too low
  // else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too low!'
  //     score--
  //     document.querySelector('.score').textContent = score
  //   } else {
  //     document.querySelector('.message').textContent = 'You lose! Try Again!'
  //     document.querySelector('.score').textContent = 0
  //   }
})

// function refreshPage() {
//   window.location.reload()
// }

document.querySelector('.again').addEventListener('click', function () {
  score = 20
  secretNumber = Math.trunc(Math.random() * 20) + 1
  displayMessage('Start guessing...')
  scoreClass(score)
  numberContent('?')
  guessValue('')
  numberStyle('15rem')
  bodyColor('#222')
})
