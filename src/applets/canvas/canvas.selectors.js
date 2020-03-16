export const selectCanvas = state => ({height: state.canvas.height, width: state.canvas.width});

export const selectCanvasHeight = state => state.canvas.height;

export const selectCanvasWidth = state => state.canvas.width;

export const selectCanvasSettingsIsFailed = state => state.canvas.isFailed;

export const selectCanvasSettingsIsLoading = state => state.canvas.isLoading;
