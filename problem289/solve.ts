function gameOfLife(board: number[][]): void {
    const m: number = board.length;
    const n: number = board[0].length;
    const countLiveNeighbors = (r: number, c: number): number => {
        let count: number = 0;
        const directions: number[][] = [
            [-1,-1],[-1,0],[-1,1],
            [0,-1],        [0,1],
            [1,-1], [1,0], [1,1]
        ];
        for (const [dr, dc] of directions) {
            const nr: number = r + dr;
            const nc: number = c + dc;
            if (nr >= 0 && nr < m && nc >= 0 && nc < n) {
                if (board[nr][nc] === 1 || board[nr][nc] === 2) {
                    count++;
                }
            }
        }
        return count;
    };

    for (let r: number = 0; r < m; r++) {
        for (let c: number = 0; c < n; c++) {
            const liveNeighbors: number = countLiveNeighbors(r, c);
            const wasLive: boolean = (board[r][c] === 1);
            if (wasLive && (liveNeighbors < 2 || liveNeighbors > 3)) {
                board[r][c] = 2;
            } else if (!wasLive && liveNeighbors === 3) {
                board[r][c] = 3;
            }
        }
    }

    for (let r: number = 0; r < m; r++) {
        for (let c: number = 0; c < n; c++) {
            board[r][c] = board[r][c] % 2;   // ✅ fixed: 2→0(dead), 3→1(live), 0→0, 1→1
        }
    }
};