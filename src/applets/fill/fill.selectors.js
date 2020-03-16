// export const selectFill = state => ({height: state.fill.height, width: state.fill.width, color: state.fill.color});
export const selectFill = state => ({height: 30, width: 30, color: '#358F90'});

export const selectFillHeight = state => state.fill.height;

export const selectFillWidth = state => state.fill.width;

export const selectFillColor = state => state.fill.color;

export const selectFillSettingsIsFailed = state => state.fill.isFailed;

export const selectFillSettingsIsLoading = state => state.fill.isLoading;
