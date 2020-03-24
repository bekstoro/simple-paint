import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import PropTypes from 'prop-types';

import {validationMessages} from '../App.constants';

export function Toast({
                          message = validationMessages.somethingWentWrong,
                          type = 'error'
                      }) {
    return (
        <Snackbar open={!!message}>
            <MuiAlert variant="filled" severity={type}>
                {message}
            </MuiAlert>
        </Snackbar>
    );
}

Toast.propTypes = {
    message: PropTypes.string
};
