export const SET_LINE_SETTINGS_REQUEST = 'SET_LINE_SETTINGS_REQUEST';
export const setLineSettingsRequest = payload => ({type: SET_LINE_SETTINGS_REQUEST, payload});

export const SET_LINE_SETTINGS_SUCCESS = 'SET_LINE_SETTINGS_SUCCESS';
export const setLineSettingsSuccess = payload => ({type: SET_LINE_SETTINGS_SUCCESS, payload});

export const SET_LINE_SETTINGS_FAILURE = 'SET_LINE_SETTINGS_FAILURE';
export const setLineSettingsFailure = () => ({type: SET_LINE_SETTINGS_FAILURE});
