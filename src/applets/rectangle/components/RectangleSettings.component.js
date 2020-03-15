import React, {Fragment, useState} from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import {validationMessages} from '../../../app/App.constants';

export function RectangleSettingsComponent({
                                               canvasHeight,
                                               canvasWidth,
                                               handleNext,
                                               setRectangleSettingsRequest
                                           }) {
    const [rx1, setRx1] = useState(0);
    const [rx2, setRx2] = useState(0);
    const [ry1, setRy1] = useState(0);
    const [ry2, setRy2] = useState(0);
    const [isRx1Valid, setIsRx1Valid] = useState(true);
    const [isRy1Valid, setIsRy1Valid] = useState(true);
    const [isRx2Valid, setIsRx2Valid] = useState(true);
    const [isRy2Valid, setIsRy2Valid] = useState(true);

    const onValidate = () => {
        const isRx1Valid = rx1 && rx1 > 0 && rx1 <= canvasWidth;
        const isRy1Valid = ry1 && ry1 > 0 && ry1 <= canvasHeight;
        const isRx2Valid = rx2 && rx2 > 0 && rx2 <= canvasWidth;
        const isRy2Valid = ry2 && ry2 > 0 && ry2 <= canvasHeight;
        setIsRx1Valid(isRx1Valid);
        setIsRy1Valid(isRy1Valid);
        setIsRx2Valid(isRx2Valid);
        setIsRy2Valid(isRy2Valid);

        return isRx1Valid && isRx2Valid && isRy1Valid && isRy2Valid;
    };

    const onSubmit = () => {
        const isValid = onValidate();
        if (isValid) {
            setRectangleSettingsRequest({x1: rx1, y1: ry1, x2: rx2, y2: ry2});
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
                        label="LeftTopPoint xCoordinate"
                        name="rx1"
                        placeholder="Set xCoordinate for leftTopPoint"
                        defaultValue={rx1}
                        onChange={val => setRx1(+val.target.value)}
                        margin="normal"
                        type="number"
                        required
                        error={!isRx1Valid}
                        helperText={!isRx1Valid && validationMessages.coordinatesFieldRule}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        variant="outlined"
                        label="LeftTopPoint yCoordinate"
                        name="ry1"
                        placeholder="Set xCoordinate for leftTopPoint"
                        defaultValue={ry1}
                        onChange={val => setRy1(+val.target.value)}
                        margin="normal"
                        type="number"
                        required
                        error={!isRy1Valid}
                        helperText={!isRy1Valid && validationMessages.coordinatesFieldRule}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        variant="outlined"
                        label="RightBottomPoint xCoordinate"
                        name="rx2"
                        placeholder="Set xCoordinate for rightBottomPoint"
                        defaultValue={rx2}
                        onChange={val => setRx2(+val.target.value)}
                        margin="normal"
                        type="number"
                        required
                        error={!isRx2Valid}
                        helperText={!isRx2Valid && validationMessages.coordinatesFieldRule}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        variant="outlined"
                        label="RightBottomPoint yCoordinate"
                        name="ry2"
                        placeholder="Set xCoordinate for rightBottomPoint"
                        defaultValue={ry2}
                        onChange={val => setRy2(+val.target.value)}
                        margin="normal"
                        type="number"
                        required
                        error={!isRy2Valid}
                        helperText={!isRy2Valid && validationMessages.coordinatesFieldRule}
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

RectangleSettingsComponent.propTypes = {
    canvasHeight: PropTypes.number.isRequired,
    canvasWidth: PropTypes.number.isRequired,
    handleNext: PropTypes.func.isRequired,
    setRectangleSettingsRequest: PropTypes.func.isRequired
};
