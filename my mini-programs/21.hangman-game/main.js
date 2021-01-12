let words = ["work", "table", "world", "summer"];

generateWord = () => {
    return words[Math.floor(Math.random() * words.length)];
}

greetings = () => {
    return prompt("Hello there! What is your name?", "");
}

hideWord = (word) => {
    let hidden = [];
    for (let i = 0; i < word.length; i++) {
        hidden[i] = " * ";
    }
    return hidden.join("");
}












game = () => {
    let name = greetings();
    //Main Loop
    while (true) {
        choice = confirm(name + ", do you want to play a Hangman game?")
        if (!choice) break;

        let word = generateWord();
        let hiddenWord = hideWord(word);
        alert(`The secret word is: ${hiddenWord}`);
        let hits = 0;
        while (hits !== word.length) {
            let guess = prompt("Try to guess a letter of this secret word", "");
            for (let i = 0; i < word.length; i++) {
                if (word[i] === guess) {
                    alert("Perfect! ")
                }
            }
        }

    }
    alert("Ok! Bye then!");
}

game();