import React, {useState} from 'react';
import Grid from '@material-ui/core/Grid';
import LinearProgress from '@material-ui/core/LinearProgress';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';

import {Submit} from '../../components/submit.component';
import {Toast} from '../../components/toast.component';
import {defaultFillColor, minFillHeight, minFillWidth, validationMessages} from '../../App.constants';

export function FillComponent({
                                  errorMessage,
                                  handleNext,
                                  isLoading,
                                  isSuccess,
                                  setFillRequest
                              }) {
    const [width, setWidth] = useState(minFillWidth);
    const [height, setHeight] = useState(minFillHeight);
    const [color, setColor] = useState(defaultFillColor);

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
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        variant="outlined"
                        label="Color"
                        name="color"
                        placeholder="Set color"
                        defaultValue={color}
                        onChange={val => setColor(val.target.value)}
                        margin="normal"
                        required
                        error={!color}
                        helperText={!color && validationMessages.requiredField}
                    />
                </Grid>
            </Grid>
            <Submit onNext={() => setFillRequest({width, height, color})} nextDisabled={!width || !height || !color}/>
        </>
    )
}

FillComponent.propTypes = {
    errorMessage: PropTypes.string,
    handleNext: PropTypes.func.isRequired,
    isLoading: PropTypes.bool,
    isSuccess: PropTypes.bool,
    setFillRequest: PropTypes.func.isRequired
};
