export const SET_RECTANGLE_SETTINGS_REQUEST = 'SET_RECTANGLE_SETTINGS_REQUEST';
export const setRectangleSettingsRequest = () => ({type: SET_RECTANGLE_SETTINGS_REQUEST});

export const SET_RECTANGLE_SETTINGS_SUCCESS = 'SET_RECTANGLE_SETTINGS_SUCCESS';
export const setRectangleSettingsSuccess = payload => ({type: SET_RECTANGLE_SETTINGS_SUCCESS, payload});

export const SET_RECTANGLE_SETTINGS_FAILURE = 'SET_RECTANGLE_SETTINGS_FAILURE';
export const setRectangleSettingsFailure = () => ({type: SET_RECTANGLE_SETTINGS_FAILURE});
