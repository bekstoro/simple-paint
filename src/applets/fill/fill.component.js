import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';

import {validationMessages} from '../../App.constants';

export function FillComponent({
                                  handleNext,
                                  setFillRequest
                              }) {
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const [color, setColor] = useState('#000000');
    const [isWidthValid, setIsWidthValid] = useState(true);
    const [isHeightValid, setIsHeightValid] = useState(true);
    const [isColorValid, setIsColorValid] = useState(true);

    const onValidate = () => {
        const isWidthValid = width && width > 0;
        setIsWidthValid(isWidthValid);

        const isHeightValid = height && height > 0;
        setIsHeightValid(isHeightValid);

        // TODO add color regex check
        const isColorValid = color;
        setIsColorValid(!!color);

        return isWidthValid && isHeightValid && isColorValid;
    };

    const onSubmit = () => {
        const isValid = onValidate();
        if (isValid) {
            setFillRequest({width, height, color});
            handleNext();
        }
    };

    return (
        <>
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
                        error={!isColorValid}
                        helperText={!isColorValid && validationMessages.requiredField}
                    />
                </Grid>
            </Grid>
            <div style={{display: 'flex', marginTop: 20, justifyContent: 'flex-end'}}>
                <Button variant="contained" color="primary" onClick={onSubmit}>
                    Next
                </Button>
            </div>
        </>
    )
}

FillComponent.propTypes = {
    handleNext: PropTypes.func.isRequired,
    setFillRequest: PropTypes.func.isRequired
};
