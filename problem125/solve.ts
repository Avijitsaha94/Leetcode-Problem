function isPalindrome(s: string): boolean {
    let left: number = 0;                 // বাম pointer, string-এর শুরুতে
    let right: number = s.length - 1;     // ডান pointer, string-এর শেষে

    const isAlphanumeric = (char: string): boolean => {   // helper function: character letter বা digit কিনা চেক করার জন্য
        return /^[a-zA-Z0-9]$/.test(char);
    };

    while (left < right) {                  // দুই pointer মাঝে না মেলা পর্যন্ত চলবে
        while (left < right && !isAlphanumeric(s[left])) {    // বাম দিক থেকে non-alphanumeric skip করছি
            left++;
        }

        while (left < right && !isAlphanumeric(s[right])) {   // ডান দিক থেকে non-alphanumeric skip করছি
            right--;
        }

        if (s[left].toLowerCase() !== s[right].toLowerCase()) {   // দুই দিকের character (lowercase করে) তুলনা
            return false;                                            // না মিললে সাথে সাথেই false
        }

        left++;      // মিলে গেলে, ভিতরের দিকে এগোই
        right--;
    }

    return true;   // পুরো loop শেষ, কোনো mismatch পাইনি — palindrome
};