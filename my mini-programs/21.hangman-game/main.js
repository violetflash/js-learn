let words = ["work", "table", "world", "summer"];
let results = [];

generateWord = () => {
    return words[Math.floor(Math.random() * words.length)];
}

greetings = () => {
    return prompt("Hello there! What is your name?", "");
}

hideWord = (word) => {
    let hidden = [];
    for (let i = 0; i < word.length; i++) {
        hidden[i] = "*";
    }
    return hidden.join("");
}

openLetter = (word, hiddenWord, guess) => {
    for (let i = 0; i < word.length; i++) {
        if (word[i] === guess) {
            hiddenWord = hiddenWord.split("");
            hiddenWord[i] = guess;
        }
    }
    return hiddenWord.join("");
}

stats = (shots) => {
    results.push(shots);
}


game = () => {
    let name = greetings();
    //Main Loop
    while (true) {
        choice = confirm(name.toUpperCase() + ", do you want to play a Hangman game?")
        if (!choice) break;

        let word = generateWord();
        let hiddenWord = hideWord(word);
        alert(`The secret word is: ${hiddenWord}`);

        let hits = 0;
        let shots = 0;
        let quit = false;
        while (!quit) {
            let guess = prompt("Try to guess a letter of this secret word", "");
            if (guess === "") {
                quit = confirm("Do you want to stop the game?")
            }
            shots++;

            if (guess && word.indexOf(guess) >= 0) {
                hiddenWord = openLetter(word, hiddenWord, guess);
                alert(`Correct! The secret word is now: ${hiddenWord}`);
                hits++;
                console.log(hiddenWord);
            }
            if (hits === word.length) {
                alert("You WON!");
                stats(shots);
                break;
            }
        }
    }
    alert("Ok! Bye then!");
    document.write(`Игр сыграно: ${results.length} <br>`);
}

game();