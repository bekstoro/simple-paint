export const SET_FILL_SETTINGS_REQUEST = 'SET_FILL_SETTINGS_REQUEST';
export const setFillSettingsRequest = () => ({type: SET_FILL_SETTINGS_REQUEST});

export const SET_FILL_SETTINGS_SUCCESS = 'SET_FILL_SETTINGS_SUCCESS';
export const setFillSettingsSuccess = payload => ({type: SET_FILL_SETTINGS_SUCCESS, payload});

export const SET_FILL_SETTINGS_FAILURE = 'SET_FILL_SETTINGS_FAILURE';
export const setFillSettingsFailure = () => ({type: SET_FILL_SETTINGS_FAILURE});
