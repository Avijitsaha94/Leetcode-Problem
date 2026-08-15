function reverseWords(s: string): string {
    const trimmed: string = s.trim();          // শুরু ও শেষের extra space সরিয়ে ফেললাম
    const words: string[] = trimmed.split(/\s+/);   // এক বা একাধিক space দেখলেই split করলাম (মাঝের multiple space handle হয়ে গেল)

    words.reverse();                             // word array-টা উল্টে দিলাম

    return words.join(' ');                      // single space দিয়ে জোড়া লাগিয়ে final string বানালাম
};