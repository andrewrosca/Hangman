class Hangman {
    constructor(word, attemptsLeft) {
        this.word = word.toLowerCase().split('')
        this.attemptsLeft = attemptsLeft
        this.guessedLetters = []
        this.status = 'playing'
    }
    calculateStatus() {
        const finished = this.word.every((letter) => this.guessedLetters.includes(letter) || letter === ' ')

        if (this.attemptsLeft === 0) {
            this.status = 'failed'
        } else if (finished) {
            this.status = 'finished'
        } else {
            this.status = 'playing'
        }
    }
    get puzzle() {
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
    get statusMessage() {
        if (this.status === 'playing') {
            return `Guesses left: ${this.attemptsLeft}`
        } else if (this.status === 'failed') {
            return `Nice try! The word was "${this.word.join('')}"`
        } else {
            return 'Great work! You guessed the word!'
        }
    }
    makeGuess(guess) {
        guess = guess.toLowerCase()
        const isUnique = !this.guessedLetters.includes(guess) // checks if letter already guessed
        const isBadGuess = !this.word.includes(guess)   // checks if guess is right

        if (this.status !== 'playing') { // disable new guesses unless "playing"
            return
        }

        if (isUnique) {  // add correct guessed letter to guessedLetter array
            this.guessedLetters.push(guess)
        } 

        if (isUnique && isBadGuess) { // subtract 1 from attempt when guess is wrong
            this.attemptsLeft--
        }
        this.calculateStatus()
    }
}





