import React, {useState} from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import {Header} from './components/header.component';
import {Board} from './screens/board.screen';
import {Settings} from './screens/settings.screen';
import './App.css';

const styles = theme => ({
    layout: {
        width: 'auto',
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
            width: 1000,
            marginLeft: 'auto',
            marginRight: 'auto'
        }
    },
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

function AppComponent({classes}) {
    const [isAllSettingsAvailable, setSettings] = useState(false);
    return (
        <div className="App">
            <CssBaseline/>
            <Header/>
            <main className={classes.layout}>
                <Paper className={classes.paper}>
                    {isAllSettingsAvailable ? <Board/> : <Settings onSubmit={() => setSettings(true)}/>}
                </Paper>
            </main>
        </div>
    );
}

AppComponent.propTypes = {
    classes: PropTypes.object.isRequired
};

export const App = withStyles(styles)(AppComponent);
