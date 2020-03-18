export const selectFill = state => ({height: state.fill.height, width: state.fill.width, color: state.fill.color});

export const selectFillColor = state => state.fill.color;

export const selectFillErrorMessage = state => state.fill.errorMessage;

export const selectFillHeight = state => state.fill.height;

export const selectFillIsSuccess = state => state.fill.isSuccess;

export const selectFillIsLoading = state => state.fill.isLoading;

export const selectFillWidth = state => state.fill.width;
