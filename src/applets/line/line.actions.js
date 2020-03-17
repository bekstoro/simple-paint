export const SET_LINE_REQUEST = 'SET_LINE_REQUEST';
export const setLineRequest = payload => ({type: SET_LINE_REQUEST, payload});

export const SET_LINE_SUCCESS = 'SET_LINE_SUCCESS';
export const setLineSuccess = payload => ({type: SET_LINE_SUCCESS, payload});

export const SET_LINE_FAILURE = 'SET_LINE_FAILURE';
export const setLineFailure = () => ({type: SET_LINE_FAILURE});
