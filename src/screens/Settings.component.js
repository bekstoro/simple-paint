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
    paper: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        padding: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
            marginTop: theme.spacing(8),
            marginBottom: theme.spacing(8),
            padding: theme.spacing(3)
        }
    }
});

const labels = ['Canvas', 'Line', 'Rectangle', 'Bucket Fill'];

const SettingsComponent = ({classes}) => {
    const [steps, setSteps] = useState(0);
    const handleNext = () => setSteps(steps + 1);

    const handleSteps = step => ({
        0: <CanvasSettings handleNext={handleNext}/>,
        1: <LineSettings handleNext={handleNext}/>,
        2: <RectangleSettings handleNext={handleNext}/>,
        3: <FillSettings handleNext={handleNext}/>
    }[step]);

    if (steps === labels.length) {
        return <div>Redirect to paint</div>
    }
    return (
        <Paper className={classes.paper}>
            <Stepper activeStep={steps} style={{paddingTop: 30, paddingBottom: 50}} alternativeLabel>
                {
                    labels.map(label => (<Step key={label}><StepLabel>{label}</StepLabel> </Step>))
                }
            </Stepper>
            {handleSteps(steps)}
        </Paper>
    )
};

SettingsComponent.propTypes = {
    classes: PropTypes.object.isRequired
};

export const Settings = withStyles(styles)(SettingsComponent);
