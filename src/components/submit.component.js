import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

const styles = () => ({
    wrapper: {
        display: 'flex',
        marginTop: 20,
        justifyContent: 'flex-end'
    }
});

const SubmitComponent = ({
                             classes,
                             disabled,
                             onClick
                         }) =>
    <div className={classes.wrapper}>
        <Button variant="contained" color="primary" onClick={onClick} disabled={disabled}>
            Next
        </Button>
    </div>;

SubmitComponent.propTypes = {
    classes: PropTypes.object.isRequired,
    disabled: PropTypes.bool,
    onClick: PropTypes.func.isRequired
};

export const Submit = withStyles(styles)(SubmitComponent);
