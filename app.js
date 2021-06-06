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
const counter = 0

// Function to pick random word
const randomWord = () => {
  // Get random index number
  const randomIndex = Math.floor(Math.random() * words.length)
  return words[randomIndex]
}

// Initiate game function
const initiateGame = () => {
  const newWord = randomWord()
  console.log(newWord)
  for (let i = 0; i < newWord.length; i++) {
    wordSection.innerHTML += `<div class="letter"></div>`
  }
}

window.addEventListener('keyup', e => {
  console.log(e.key)
})

console.log(hangman)
console.log(counter)
initiateGame()
