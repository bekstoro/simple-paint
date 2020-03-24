export const fillBoard = (board, x, y) => {
    let newBoard = board;
    if (newBoard[x] && newBoard[x][y] && newBoard[x][y].value === 0) {
        newBoard[x][y].value = 2;
        newBoard = fillBoard(newBoard, x - 1, y);
        newBoard = fillBoard(newBoard, x + 1, y);
        newBoard = fillBoard(newBoard, x, y - 1);
        newBoard = fillBoard(newBoard, x, y + 1);
    }
    return newBoard;
};

export const getBoard = (height, width, lineCoordinates, rectangleCoordinates) => {
    const board = [];
    for (let i = 0; i < height; i++) {
        const row = [];
        for (let j = 0; j < width; j++) {
            row.push({value: 0});
        }
        board.push(row);
    }
    [...lineCoordinates, ...rectangleCoordinates].forEach(([x, y]) => {
        board[y][x].value = 1;
    });
    return board;
};

export const getLinesCoordinates = lines => {
    const coordinates = [];
    for (let i = 0; i < lines.length; i++) {
        const {x1, y1, x2, y2} = lines[i];
        const isHorizontal = x1 !== x2;
        const startPoint = isHorizontal ? x1 - 1 : y1 - 1;
        const endPoint = isHorizontal ? x2 : y2;
        for (let i = startPoint; i < endPoint; i++) {
            coordinates.push(isHorizontal ? [i, startPoint] : [startPoint, i]);
        }
    }
    return coordinates
};

export const getRectanglesCoordinates = rectangles => {
    const coordinates = [];
    for (let i = 0; i < rectangles.length; i++) {
        const {x1, y1, x2, y2} = rectangles[i];
        for (let i = x1 - 1; i < x2; i++) {
            coordinates.push([i, y1 - 1], [i, y2 - 1]);
        }
        for (let i = y1; i < y2; i++) {
            coordinates.push([x1 - 1, i], [x2 - 1, i]);
        }
    }
    return coordinates;
};
