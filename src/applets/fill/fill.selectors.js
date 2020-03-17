export const selectFill = state => ({height: state.fill.height, width: state.fill.width, color: state.fill.color});

export const selectFillHeight = state => state.fill.height;

export const selectFillWidth = state => state.fill.width;

export const selectFillColor = state => state.fill.color;

export const selectFillIsFailed = state => state.fill.isFailed;

export const selectFillIsLoading = state => state.fill.isLoading;
