function intToRoman(num: number): string {
    // value আর symbol এর pair, বড় থেকে ছোট (descending) order এ — subtractive case গুলোও অন্তর্ভুক্ত
    const valueSymbols: [number, string][] = [
        [1000, 'M'], [900, 'CM'], [500, 'D'], [400, 'CD'],
        [100, 'C'], [90, 'XC'], [50, 'L'], [40, 'XL'],
        [10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'],
        [1, 'I']
    ];

    let result: string = '';   // চূড়ান্ত Roman numeral string বানানোর জন্য

    for (const [value, symbol] of valueSymbols) {   // বড় থেকে ছোট প্রতিটা value-symbol pair দেখব
        while (num >= value) {                        // যতবার এই value দিয়ে বিয়োগ করা সম্ভব, ততবার করব
            result += symbol;                           // symbol জুড়ে দিলাম
            num -= value;                                // value বিয়োগ করলাম
        }
    }

    return result;   // চূড়ান্ত Roman numeral
};