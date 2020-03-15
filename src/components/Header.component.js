import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Link from '@material-ui/core/Link';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import GithubIcon from '@material-ui/icons/GitHub'
import PropTypes from 'prop-types';
import {githubUrl} from '../app/App.constants';

const styles = () => ({
    appBar: {
        position: 'relative'
    },
    iconMargin: {
        marginLeft: 'auto'
    }
});

const HeaderComponent = ({classes}) =>
    <AppBar className={classes.appBar}>
        <Toolbar>
            <Typography variant="h6" noWrap>
                Simple Paint
            </Typography>
            <IconButton color="inherit" aria-label="Github" className={classes.iconMargin}>
                <Link
                    href={githubUrl}
                    target="_blank"
                    title="Github"
                    color="inherit"
                >
                    <GithubIcon/>
                </Link>
            </IconButton>
        </Toolbar>
    </AppBar>;

HeaderComponent.propTypes = {
    classes: PropTypes.object.isRequired
};

export const Header = withStyles(styles)(HeaderComponent);
