import React, {useState} from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Stepper from '@material-ui/core/Stepper';
import PropTypes from 'prop-types';

import {Canvas} from '../applets/canvas';
import {Fill} from '../applets/fill';
import {Line} from '../applets/line';
import {Rectangle} from '../applets/rectangle';

const styles = () => ({
    stepper: {
        paddingTop: 30,
        paddingBottom: 50
    }
});

const labelsOfSteps = ['Canvas', 'Line', 'Rectangle', 'Bucket Fill'];

const SettingsComponent = ({classes, onSubmit}) => {
    const [steps, setSteps] = useState(0);

    const handleNext = () => setSteps(steps + 1);

    const handleSteps = step => ({
        0: <Canvas handleNext={handleNext}/>,
        1: <Line handleNext={handleNext}/>,
        2: <Rectangle handleNext={handleNext}/>,
        3: <Fill handleNext={handleNext}/>
    }[step]);

    if (steps === labelsOfSteps.length) onSubmit();
    return (
        <>
            <Stepper activeStep={steps} className={classes.stepper} alternativeLabel>
                {
                    labelsOfSteps.map(label => (<Step key={label}><StepLabel>{label}</StepLabel></Step>))
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
