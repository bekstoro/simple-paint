import React, {useState} from 'react';
import Grid from '@material-ui/core/Grid';
import LinearProgress from '@material-ui/core/LinearProgress';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';

import {Submit} from '../../components/submit.component';
import {Toast} from '../../components/toast.component';
import {minCanvasHeight, minCanvasWidth, validationMessages} from '../../App.constants';

export function CanvasComponent({
                                    errorMessage,
                                    handleNext,
                                    isLoading,
                                    isSuccess,
                                    setCanvasRequest
                                }) {
    const [width, setWidth] = useState(minCanvasWidth);
    const [height, setHeight] = useState(minCanvasHeight);

    if (isSuccess) handleNext();

    if (isLoading) return <LinearProgress/>;

    return (
        <>
            {
                errorMessage && <Toast message={errorMessage}/>
            }
            <Grid container>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        variant="outlined"
                        label="Width"
                        name="width"
                        placeholder="Set width"
                        defaultValue={width}
                        onChange={val => setWidth(+val.target.value)}
                        margin="normal"
                        type="number"
                        required
                        error={!width}
                        helperText={!width && validationMessages.requiredField}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        variant="outlined"
                        label="Height"
                        name="height"
                        placeholder="Set height"
                        defaultValue={height}
                        onChange={val => setHeight(+val.target.value)}
                        margin="normal"
                        type="number"
                        required
                        error={!height}
                        helperText={!height && validationMessages.requiredField}
                    />
                </Grid>
            </Grid>
            <Submit onNext={() => setCanvasRequest({width, height})} nextDisabled={!width || !height}/>
        </>
    )
}

CanvasComponent.propTypes = {
    errorMessage: PropTypes.string,
    handleNext: PropTypes.func.isRequired,
    isLoading: PropTypes.bool,
    isSuccess: PropTypes.bool,
    setCanvasRequest: PropTypes.func.isRequired
};
