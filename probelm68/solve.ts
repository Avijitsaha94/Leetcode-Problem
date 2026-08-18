function fullJustify(words: string[], maxWidth: number): string[] {
    const result: string[] = [];   // চূড়ান্ত output লাইনগুলো রাখার জন্য
    let i: number = 0;             // words array-এ বর্তমান position

    while (i < words.length) {
        // ধাপ ১: Greedy ভাবে এই line-এ কোন কোন word যাবে সেটা বের করি
        const lineWords: string[] = [];         // এই line-এর word গুলো রাখার জন্য
        let lineLength: number = 0;              // এখন পর্যন্ত এই line-এর word গুলোর মোট length (space ছাড়া)

        while (i < words.length) {
            const wordLen: number = words[i].length;
            // নতুন word যোগ করলে কি line-টা maxWidth ছাড়িয়ে যাবে?
            // শর্ত: (আগের length) + (এখন পর্যন্ত word সংখ্যা, mandatory space হিসেবে) + (নতুন word length) <= maxWidth
            const neededLength: number = lineLength + lineWords.length + wordLen;   // lineWords.length = কতটা mandatory space লাগবে (প্রতিটা আগের word-এর পরে ১টা)

            if (neededLength > maxWidth) {
                break;   // আর জায়গা নাই, এই line-এর word collection এখানেই শেষ
            }

            lineWords.push(words[i]);   // word-টা এই line-এ যোগ করলাম
            lineLength += wordLen;       // মোট word-length আপডেট করলাম
            i++;                          // পরের word-এ গেলাম
        }

        // ধাপ ২: এই line-টা format করি
        const isLastLine: boolean = (i === words.length);        // এটাই কি একদম শেষ line?
        const isSingleWordLine: boolean = (lineWords.length === 1);   // এই line-এ কি মাত্র ১টা word?

        if (isLastLine || isSingleWordLine) {
            // Case A: Left-justified — word-গুলোর মাঝে ১টা করে space, বাকি সব padding শেষে
            let line: string = lineWords.join(' ');                  // সাধারণ single-space join
            line += ' '.repeat(maxWidth - line.length);              // বাকি length পুরোটাই trailing space দিয়ে ভরাট
            result.push(line);
        } else {
            // Case B: Fully-justified — space সমানভাবে (এবং বামদিকে বেশি) ছড়িয়ে দিতে হবে
            const totalSpaces: number = maxWidth - lineLength;         // মোট কতগুলো space বসাতে হবে
            const gaps: number = lineWords.length - 1;                  // word-গুলোর মাঝে কতগুলো ফাঁকা জায়গা (gap) আছে

            const spacesPerGap: number = Math.floor(totalSpaces / gaps);   // প্রতিটা gap-এ ন্যূনতম এতগুলো space
            const extraSpaces: number = totalSpaces % gaps;                 // অবশিষ্ট space, যেগুলো বামদিকের gap-এ বাড়তি যাবে

            let line: string = '';
            for (let j: number = 0; j < lineWords.length; j++) {
                line += lineWords[j];                 // word যোগ করলাম

                if (j < gaps) {                          // যদি এটা শেষ word না হয় (তার মানে পরে একটা gap আছে)...
                    let spacesToAdd: number = spacesPerGap;
                    if (j < extraSpaces) {                  // প্রথম কয়েকটা gap-এ (extraSpaces সংখ্যক) ১টা বাড়তি space
                        spacesToAdd++;
                    }
                    line += ' '.repeat(spacesToAdd);
                }
            }
            result.push(line);
        }
    }

    return result;   
};
