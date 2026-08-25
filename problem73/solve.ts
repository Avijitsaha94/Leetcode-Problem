function setZeroes(matrix: number[][]): void {
    const m: number = matrix.length;
    const n: number = matrix[0].length;

    let firstRowHasZero: boolean = false;   // প্রথম row-এ নিজে কোনো 0 আছে কিনা (আগে থেকে সংরক্ষণ)
    let firstColHasZero: boolean = false;   // প্রথম column-এ নিজে কোনো 0 আছে কিনা

    // ধাপ ১: প্রথম row এ 0 আছে কিনা চেক করি
    for (let c: number = 0; c < n; c++) {
        if (matrix[0][c] === 0) {
            firstRowHasZero = true;
            break;
        }
    }

    // ধাপ ২: প্রথম column এ 0 আছে কিনা চেক করি
    for (let r: number = 0; r < m; r++) {
        if (matrix[r][0] === 0) {
            firstColHasZero = true;
            break;
        }
    }

    // ধাপ ৩: বাকি matrix (r>=1, c>=1) স্ক্যান করে প্রথম row/column-কে marker হিসেবে ব্যবহার করি
    for (let r: number = 1; r < m; r++) {
        for (let c: number = 1; c < n; c++) {
            if (matrix[r][c] === 0) {
                matrix[r][0] = 0;   // এই row-এ zero আছে, মার্ক করলাম
                matrix[0][c] = 0;   // এই column-এ zero আছে, মার্ক করলাম
            }
        }
    }

    // ধাপ ৪: marker অনুযায়ী বাকি matrix (r>=1, c>=1) zero করি
    for (let r: number = 1; r < m; r++) {
        for (let c: number = 1; c < n; c++) {
            if (matrix[r][0] === 0 || matrix[0][c] === 0) {
                matrix[r][c] = 0;
            }
        }
    }

    // ধাপ ৫: প্রথম row/column নিজে zero করা (সবার শেষে, সংরক্ষিত তথ্য দিয়ে)
    if (firstRowHasZero) {
        for (let c: number = 0; c < n; c++) {
            matrix[0][c] = 0;
        }
    }

    if (firstColHasZero) {
        for (let r: number = 0; r < m; r++) {
            matrix[r][0] = 0;
        }
    }
};