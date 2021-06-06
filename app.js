// Words
const words = [
  'hangman',
  'london',
  'javascript',
  'youtube',
  'leg',
  'chapel',
  'shark'
]

// Game variables
const hangman = document.querySelectorAll('.figure-part')
const wordSection = document.querySelector('.word-container')
const wrong = document.querySelector('.wrong')
let counter = 0
let letterCounter
let newWord
const wrongLetters = []
let gameOver = false

// Function to pick random word
const randomWord = () => {
  // Get random index number
  const randomIndex = Math.floor(Math.random() * words.length)
  return words[randomIndex]
}

// Initiate game function
const initiateGame = () => {
  newWord = randomWord()
  console.log(newWord)
  for (let i = 0; i < newWord.length; i++) {
    wordSection.innerHTML += `<div class="letter"></div>`
  }
  letterCounter = newWord.length
}

// Listen for key presses
window.addEventListener('keyup', e => {
  // Check if game over
  if (!gameOver) {
    // Loop through newWord
    for (let i = 0; i < newWord.length; i++) {
      // Check if key pressed matches a letter in the word
      if (e.key === newWord[i]) {
        // get letter in DOM
        const letters = document.querySelectorAll('.letter')
        // set inner html to key
        letters[i].innerHTML = e.key
        // subtract one from letter counter
        letterCounter--
        // If letter counter hits zero log you win to console and set gameover to true
        if (letterCounter === 0) {
          console.log('You win')
          gameOver = true
        }
      }
    }
    // If letter exists in word return
    for (let i = 0; i < newWord.length; i++) {
      if (e.key === newWord[i]) {
        return
      }
    }
    // If letter does not exist in the word but already exists in wrongLetters array return
    for (let i = 0; i < wrongLetters.length; i++) {
      if (e.key === wrongLetters[i]) {
        return
      }
    }
    // Push wrong letter to wrong letters array and output to DOM
    wrongLetters.push(e.key)
    wrong.innerHTML = `Wrong, ${wrongLetters}`

    // add to hangman svg
    hangman[counter].style.display = 'block'
    counter++
    // If counter hits six its gameover
    if (counter === 6) gameOver = true
  }
})

// Start game
initiateGame()
