import React, {useState} from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Paper from '@material-ui/core/Paper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Stepper from '@material-ui/core/Stepper';
import PropTypes from 'prop-types';
import {CanvasSettings} from '../applets/canvas';
import {FillSettings} from '../applets/fill';
import {LineSettings} from '../applets/line';
import {RectangleSettings} from '../applets/rectangle';

const styles = theme => ({
    stepper: {
        paddingTop: 30,
        paddingBottom: 50
    }
});

const labels = ['Canvas', 'Line', 'Rectangle', 'Bucket Fill'];

const SettingsComponent = ({classes, onSubmit}) => {
    const [steps, setSteps] = useState(0);
    const handleNext = () => setSteps(steps + 1);

    const handleSteps = step => ({
        0: <CanvasSettings handleNext={handleNext}/>,
        1: <LineSettings handleNext={handleNext}/>,
        2: <RectangleSettings handleNext={handleNext}/>,
        3: <FillSettings handleNext={handleNext}/>
    }[step]);

    if (steps === labels.length) {
        onSubmit();
    }
    return (
        <>
            <Stepper activeStep={steps} className={classes.stepper} alternativeLabel>
                {
                    labels.map(label => (<Step key={label}><StepLabel>{label}</StepLabel> </Step>))
                }
            </Stepper>
            {handleSteps(steps)}
        </>
    )
};

SettingsComponent.propTypes = {
    classes: PropTypes.object.isRequired,
    onSubmit: PropTypes.func.isRequired
};

export const Settings = withStyles(styles)(SettingsComponent);
