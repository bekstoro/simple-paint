import React, {Fragment, useState} from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import {validationMessages} from '../../../app/App.constants';

export function LineSettingsComponent({
                                          canvasHeight,
                                          canvasWidth,
                                          handleNext,
                                          setLineSettingsRequest
                                      }) {
    const [x1, setX1] = useState(0);
    const [x2, setX2] = useState(0);
    const [y1, setY1] = useState(0);
    const [y2, setY2] = useState(0);
    const [isX1Valid, setIsX1Valid] = useState(true);
    const [isY1Valid, setIsY1Valid] = useState(true);
    const [isX2Valid, setIsX2Valid] = useState(true);
    const [isY2Valid, setIsY2Valid] = useState(true);

    const onValidate = () => {
        const isX1Valid = x1 && x1 > 0 && x1 <= canvasWidth;
        const isY1Valid = y1 && y1 > 0 && y1 <= canvasHeight;
        const isX2Valid = x2 && x2 > 0 && x2 <= canvasWidth;
        const isY2Valid = y2 && y2 > 0 && y2 <= canvasHeight;
        setIsX1Valid(isX1Valid);
        setIsY1Valid(isY1Valid);
        setIsX2Valid(isX2Valid);
        setIsY2Valid(isY2Valid);

        return isX1Valid && isX2Valid && isY1Valid && isY2Valid;
    };

    const onSubmit = () => {
        const isValid = onValidate();
        if (isValid) {
            setLineSettingsRequest({x1, y1, x2, y2});
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
                        label="StartPoint xCoordinate"
                        name="x1"
                        placeholder="Set xCoordinate for startPoint"
                        defaultValue={x1}
                        onChange={val => setX1(+val.target.value)}
                        margin="normal"
                        type="number"
                        required
                        error={!isX1Valid}
                        helperText={!isX1Valid && validationMessages.coordinatesFieldRule}
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
                        error={!isY1Valid}
                        helperText={!isY1Valid && validationMessages.coordinatesFieldRule}
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
                        error={!isX2Valid}
                        helperText={!isX2Valid && validationMessages.coordinatesFieldRule}
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
                        error={!isY2Valid}
                        helperText={!isY2Valid && validationMessages.coordinatesFieldRule}
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

LineSettingsComponent.propTypes = {
    canvasHeight: PropTypes.number.isRequired,
    canvasWidth: PropTypes.number.isRequired,
    handleNext: PropTypes.func.isRequired,
    setLineSettingsRequest: PropTypes.func.isRequired
};
