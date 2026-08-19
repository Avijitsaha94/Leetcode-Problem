function twoSum(numbers: number[], target: number): number[] {
    let left: number = 0;                      // বাম pointer, সবচেয়ে ছোট value-তে
    let right: number = numbers.length - 1;    // ডান pointer, সবচেয়ে বড় value-তে

    while (left < right) {                      // দুই pointer মাঝে না মেলা পর্যন্ত চলবে
        const sum: number = numbers[left] + numbers[right];   // বর্তমান যোগফল হিসাব করলাম

        if (sum === target) {                     // যদি সঠিক যোগফল পেয়ে যাই...
            return [left + 1, right + 1];            // ...1-indexed করে return করি (+1 করে)
        } else if (sum < target) {                // যদি যোগফল কম হয়...
            left++;                                   // ...বামদিক থেকে বড় value নিতে এগোই
        } else {                                   // যদি যোগফল বেশি হয়...
            right--;                                  // ...ডানদিক থেকে ছোট value নিতে পিছাই
        }
    }

    return [];   // Problem guarantee করছে সমাধান আছে, তাই এখানে পৌঁছানোর কথা না (defensive fallback)
};