function isValidSudoku(board: string[][]): boolean {
    const rows: Set<string>[] = Array.from({ length: 9 }, () => new Set());   // প্রতিটা row-এর জন্য আলাদা Set
    const cols: Set<string>[] = Array.from({ length: 9 }, () => new Set());   // প্রতিটা column-এর জন্য আলাদা Set
    const boxes: Set<string>[] = Array.from({ length: 9 }, () => new Set());  // প্রতিটা 3x3 box-এর জন্য আলাদা Set

    for (let r: number = 0; r < 9; r++) {          // প্রতিটা row scan করছি
        for (let c: number = 0; c < 9; c++) {         // প্রতিটা column scan করছি
            const value: string = board[r][c];

            if (value === '.') continue;                // খালি cell হলে skip

            const boxIndex: number = Math.floor(r / 3) * 3 + Math.floor(c / 3);   // এই cell কোন 3x3 box-এ পড়ছে

            if (rows[r].has(value) || cols[c].has(value) || boxes[boxIndex].has(value)) {
                return false;                              // যেকোনো একটা group-এ আগেই এই digit থাকলে, duplicate পাওয়া গেল
            }

            rows[r].add(value);       // এই digit-কে তিনটা group-এই "দেখা হয়েছে" মার্ক করলাম
            cols[c].add(value);
            boxes[boxIndex].add(value);
        }
    }

    return true;   // পুরো board scan শেষ, কোথাও duplicate পাওয়া যায়নি
};