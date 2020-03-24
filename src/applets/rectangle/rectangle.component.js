import React, {useState} from 'react';
import Grid from '@material-ui/core/Grid';
import LinearProgress from '@material-ui/core/LinearProgress';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';

import {Submit} from '../../components/submit.component';
import {Toast} from '../../components/toast.component';
import {
    defaultRectangleX1,
    defaultRectangleX2,
    defaultRectangleY1,
    defaultRectangleY2,
    messages,
    validationMessages
} from '../../App.constants';

export function RectangleComponent({
                                       errorMessage,
                                       handleNext,
                                       isLoading,
                                       isSuccess,
                                       setRectangleRequest
                                   }) {
    const [x1, setX1] = useState(defaultRectangleX1);
    const [x2, setX2] = useState(defaultRectangleX2);
    const [y1, setY1] = useState(defaultRectangleY1);
    const [y2, setY2] = useState(defaultRectangleY2);

    const onNext = () => {
        if (isSuccess) handleNext();
    };

    const onSubmit = () => {
        setRectangleRequest({x1, y1, x2, y2})
    };

    if (isLoading) return <LinearProgress/>;

    return (
        <>
            {
                isSuccess && <Toast message={messages.newRectangleAdded} type="success"/>
            }
            {
                errorMessage && <Toast message={errorMessage}/>
            }
            <Grid container>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        variant="outlined"
                        label="LeftTopPoint xCoordinate"
                        name="x1"
                        placeholder="Set xCoordinate for leftTopPoint"
                        defaultValue={x1}
                        onChange={val => setX1(+val.target.value)}
                        margin="normal"
                        type="number"
                        required
                        error={!x1}
                        helperText={!x1 && validationMessages.requiredField}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        variant="outlined"
                        label="LeftTopPoint yCoordinate"
                        name="y1"
                        placeholder="Set xCoordinate for leftTopPoint"
                        defaultValue={y1}
                        onChange={val => setY1(+val.target.value)}
                        margin="normal"
                        type="number"
                        required
                        error={!y1}
                        helperText={!y1 && validationMessages.requiredField}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        variant="outlined"
                        label="RightBottomPoint xCoordinate"
                        name="x2"
                        placeholder="Set xCoordinate for rightBottomPoint"
                        defaultValue={x2}
                        onChange={val => setX2(+val.target.value)}
                        margin="normal"
                        type="number"
                        required
                        error={!x2}
                        helperText={!x2 && validationMessages.requiredField}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        variant="outlined"
                        label="RightBottomPoint yCoordinate"
                        name="y2"
                        placeholder="Set xCoordinate for rightBottomPoint"
                        defaultValue={y2}
                        onChange={val => setY2(+val.target.value)}
                        margin="normal"
                        type="number"
                        required
                        error={!y2}
                        helperText={!y2 && validationMessages.requiredField}
                    />
                </Grid>
            </Grid>
            <Submit onNext={onNext}
                    onSubmit={onSubmit}
                    nextDisabled={!isSuccess}
                    submitDisabled={!x1 || !x2 || !y1 || !y2}/>
        </>
    )
}

RectangleComponent.propTypes = {
    errorMessage: PropTypes.string,
    handleNext: PropTypes.func.isRequired,
    isLoading: PropTypes.bool,
    isSuccess: PropTypes.bool,
    setRectangleRequest: PropTypes.func.isRequired
};
