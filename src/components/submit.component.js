import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

const styles = () => ({
    wrapper: {
        display: 'flex',
        marginTop: 20,
        justifyContent: 'flex-end'
    },
    addBtn: {
        marginRight: '1em'
    }
});

const SubmitComponent = ({
                             classes,
                             nextDisabled,
                             onNext,
                             onSubmit,
                             submitDisabled
                         }) =>
    <div className={classes.wrapper}>
        {
            onSubmit &&
            <Button className={classes.addBtn}
                    variant="contained"
                    color="secondary"
                    onClick={onSubmit}
                    disabled={submitDisabled}>Add</Button>
        }
        {
            onNext &&
            <Button variant="contained"
                    color="primary"
                    onClick={onNext}
                    disabled={submitDisabled || nextDisabled}>Next</Button>
        }
    </div>;

SubmitComponent.propTypes = {
    classes: PropTypes.object.isRequired,
    nextDisabled: PropTypes.bool,
    onNext: PropTypes.func.isRequired,
    onSubmit: PropTypes.func,
    submitDisabled: PropTypes.bool
};

export const Submit = withStyles(styles)(SubmitComponent);
