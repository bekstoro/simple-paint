export const SET_CANVAS_SETTINGS_REQUEST = 'SET_CANVAS_SETTINGS_REQUEST';
export const setCanvasSettingsRequest = () => ({type: SET_CANVAS_SETTINGS_REQUEST});

export const SET_CANVAS_SETTINGS_SUCCESS = 'SET_CANVAS_SETTINGS_SUCCESS';
export const setCanvasSettingsSuccess = payload => ({type: SET_CANVAS_SETTINGS_SUCCESS, payload});

export const SET_CANVAS_SETTINGS_FAILURE = 'SET_CANVAS_SETTINGS_FAILURE';
export const setCanvasSettingsFailure = () => ({type: SET_CANVAS_SETTINGS_FAILURE});
