export const selectRectangle = state => ({
    x1: state.rectangle.x1,
    y1: state.rectangle.y1,
    x2: state.rectangle.x2,
    y2: state.rectangle.y2
});

export const selectRectangleX1 = state => state.rectangle.x1;

export const selectRectangleY1 = state => state.rectangle.y1;

export const selectRectangleX2 = state => state.rectangle.x2;

export const selectRectangleY2 = state => state.rectangle.y2;

export const selectRectangleIsFailed = state => state.rectangle.isFailed;

export const selectRectangleIsLoading = state => state.rectangle.isLoading;
