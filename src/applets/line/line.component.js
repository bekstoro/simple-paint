import React, {useState} from 'react';
import Grid from '@material-ui/core/Grid';
import LinearProgress from '@material-ui/core/LinearProgress';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';

import {Submit} from '../../components/submit.component';
import {Toast} from '../../components/toast.component';
import {
    defaultLineX1,
    defaultLineX2,
    defaultLineY1,
    defaultLineY2,
    messages,
    validationMessages
} from '../../App.constants';

export function LineComponent({
                                  errorMessage,
                                  handleNext,
                                  isLoading,
                                  isSuccess,
                                  setLineRequest
                              }) {
    const [x1, setX1] = useState(defaultLineX1);
    const [x2, setX2] = useState(defaultLineX2);
    const [y1, setY1] = useState(defaultLineY1);
    const [y2, setY2] = useState(defaultLineY2);

    const onNext = () => {
        if (isSuccess) handleNext();
    };

    const onSubmit = () => {
        setLineRequest({x1, y1, x2, y2});
    };

    if (isLoading) return <LinearProgress/>;

    return (
        <>
            {
                isSuccess && <Toast message={messages.newLineAdded} type="success"/>
            }
            {
                errorMessage && <Toast message={errorMessage}/>
            }
            <Grid container>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        variant="outlined"
                        label="StartPoint xCoordinate"
                        name="x1"
                        placeholder="Set xCoordinate for startPoint"
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
                        label="StartPoint yCoordinate"
                        name="y1"
                        placeholder="Set xCoordinate for startPoint"
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
                        label="EndPoint xCoordinate"
                        name="x2"
                        placeholder="Set xCoordinate for startPoint"
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
                        label="EndPoint yCoordinate"
                        name="y2"
                        placeholder="Set xCoordinate for startPoint"
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

LineComponent.propTypes = {
    errorMessage: PropTypes.string,
    handleNext: PropTypes.func.isRequired,
    isLoading: PropTypes.bool,
    isSuccess: PropTypes.bool,
    setLineRequest: PropTypes.func.isRequired
};
