


const Hangman = function (word, attempts) {
    this.word = word.toLowerCase().split('')
    this.attempts = attempts
    this.guessedLetters = []
}

Hangman.prototype.getPuzzle = function() {
    let puzzle = ''

    this.word.forEach((letter) => {
        if(this.guessedLetters.includes(letter) || letter === ' ') {
            puzzle = puzzle + letter
        } else {
            puzzle = puzzle + '*'
        }
    })

    return puzzle
}

Hangman.prototype.makeGuess = function(guess) {
    guess = guess.toLowerCase()
    const isUnique = !this.guessedLetters.includes(guess) // checks if letter already guessed
    const isBadGuess = !this.word.includes(guess)   // checks if guess is right

    if (isUnique) {  // add correct guessed letter to guessedLetter array
        this.guessedLetters.push(guess)
    } 

    if (isUnique && isBadGuess) { // subtract 1 from attempt when guess is wrong
        this.attempts--
    }
}

const game1 = new Hangman('Cat', 2)
game1.makeGuess('c')
game1.makeGuess('t')
game1.makeGuess('z')
console.log(game1.getPuzzle())
console.log(game1.attempts)


const game2 = new Hangman('New Jersey', 4)
game2.makeGuess('w')
console.log(game2.getPuzzle())


