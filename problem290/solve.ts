function wordPattern(pattern: string, s: string): boolean {
    const words: string[] = s.split(' ');   // s কে word-এ ভাগ করলাম

    if (pattern.length !== words.length) return false;   // letter সংখ্যা আর word সংখ্যা না মিললে, bijection অসম্ভব

    const charToWord: Map<string, string> = new Map();   // pattern-এর letter -> word
    const wordToChar: Map<string, string> = new Map();   // word -> pattern-এর letter

    for (let i: number = 0; i < pattern.length; i++) {
        const char: string = pattern[i];
        const word: string = words[i];

        if (charToWord.has(char)) {                        // যদি এই letter আগে mapping করা থাকে...
            if (charToWord.get(char) !== word) {              // ...তার mapped word বর্তমান word এর সমান কিনা চেক
                return false;                                    // না মিললে inconsistent
            }
        } else {
            charToWord.set(char, word);                       // নতুন mapping তৈরি (letter -> word)
        }

        if (wordToChar.has(word)) {                        // যদি এই word আগে mapping করা থাকে...
            if (wordToChar.get(word) !== char) {              // ...তার mapped letter বর্তমান letter এর সমান কিনা চেক
                return false;                                    // না মিললে inconsistent
            }
        } else {
            wordToChar.set(word, char);                       // নতুন mapping তৈরি (word -> letter)
        }
    }

    return true;   // সব position-এ উভয় দিকের mapping সঙ্গতিপূর্ণ ছিল
};