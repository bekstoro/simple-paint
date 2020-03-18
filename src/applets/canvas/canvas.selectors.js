export const selectCanvas = state => ({height: state.canvas.height, width: state.canvas.width});

export const selectCanvasErrorMessage = state => state.canvas.errorMessage;

export const selectCanvasHeight = state => state.canvas.height;

export const selectCanvasIsLoading = state => state.canvas.isLoading;

export const selectCanvasIsSuccess = state => state.canvas.isSuccess;

export const selectCanvasWidth = state => state.canvas.width;
