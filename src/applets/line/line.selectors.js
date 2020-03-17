export const selectLine = state => ({x1: state.line.x1, y1: state.line.y1, x2: state.line.x2, y2: state.line.y2});

export const selectLineX1 = state => state.line.x1;

export const selectLineY1 = state => state.line.y1;

export const selectLineX2 = state => state.line.x2;

export const selectLineY2 = state => state.line.y2;

export const selectLineIsFailed = state => state.line.isFailed;

export const selectLineIsLoading = state => state.line.isLoading;
