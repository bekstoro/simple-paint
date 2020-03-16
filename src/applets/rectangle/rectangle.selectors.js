// export const selectRectangle = state => ({x1: state.line.x1, y1: state.line.y1, x2: state.line.x2, y2: state.line.y2});

export const selectRectangle = state => ({x1: 5, y1: 5, x2: 15, y2: 15});

export const selectRectangleX1 = state => state.rectangle.x1;

export const selectRectangleY1 = state => state.rectangle.y1;

export const selectRectangleX2 = state => state.rectangle.x2;

export const selectRectangleY2 = state => state.rectangle.y2;

export const selectRectangleSettingsIsFailed = state => state.rectangle.isFailed;

export const selectRectangleSettingsIsLoading = state => state.rectangle.isLoading;
