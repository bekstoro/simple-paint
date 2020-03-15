import React, {Fragment, useState} from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import {
    maxCanvasHeight,
    maxCanvasWidth,
    minCanvasHeight,
    minCanvasWidth,
    validationMessages
} from '../../../app/App.constants';

export function CanvasSettingsComponent({
                                            handleNext,
                                            setCanvasSettingsRequest
                                        }) {
    const [width, setWidth] = useState(minCanvasWidth);
    const [height, setHeight] = useState(minCanvasHeight);
    const [isWidthValid, setIsWidthValid] = useState(true);
    const [isHeightValid, setIsHeightValid] = useState(true);

    const onValidate = () => {
        const isWidthValid = width && width >= minCanvasWidth && width <= maxCanvasWidth;
        setIsWidthValid(isWidthValid);

        const isHeightValid = height && height >= minCanvasHeight && height <= maxCanvasHeight;
        setIsHeightValid(isHeightValid);

        return isWidthValid && isHeightValid;
    };

    const onSubmit = () => {
        const isValid = onValidate();
        if (isValid) {
            setCanvasSettingsRequest({width, height});
            handleNext();
        }
    };

    return (
        <Fragment>
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
                        error={!isWidthValid}
                        helperText={!isWidthValid && validationMessages.canvasWidth}
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
                        error={!isHeightValid}
                        helperText={!isHeightValid && validationMessages.canvasHeight}
                    />
                </Grid>
            </Grid>
            <div style={{display: 'flex', marginTop: 20, justifyContent: 'flex-end'}}>
                <Button variant="contained" color="primary" onClick={onSubmit}>
                    Next
                </Button>
            </div>
        </Fragment>
    )
}

CanvasSettingsComponent.propTypes = {
    handleNext: PropTypes.func.isRequired,
    setCanvasSettingsRequest: PropTypes.func.isRequired
};
