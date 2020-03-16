import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import CssBaseline from '@material-ui/core/CssBaseline';
import PropTypes from 'prop-types';
import {Header} from '../components/Header.component';
import {Paint} from '../screens/Paint.component';
import {Settings} from '../screens/Settings.component';
import './App.css';

const styles = theme => ({
    layout: {
        width: 'auto',
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
            minWidth: 600,
            width: 'auto',
            marginLeft: 'auto',
            marginRight: 'auto'
        }
    }
});

function AppComponent({classes}) {
    return (
        <div className="App">
            <CssBaseline/>
            <Header/>
            <main className={classes.layout}>
                <Paint/>
            </main>
        </div>
    );
}

AppComponent.propTypes = {
    classes: PropTypes.object.isRequired
};

export const App = withStyles(styles)(AppComponent);
