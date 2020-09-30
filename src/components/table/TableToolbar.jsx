import React from "react";
import MUIToolbar from "@material-ui/core/Toolbar";
import {lighten, makeStyles} from "@material-ui/core/styles";

const useToolbarStyles = makeStyles((theme) => ({
    root: {
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(1),
    },
    highlight:
        theme.palette.type === 'light'
            ? {
                color: theme.palette.secondary.main,
                backgroundColor: lighten(theme.palette.secondary.light, 0.85),
            }
            : {
                color: theme.palette.text.primary,
                backgroundColor: theme.palette.secondary.dark,
            }
}));

const Toolbar = (props) => {
    const {
        children
    } = props;

    const classes = useToolbarStyles();

    return (
        <MUIToolbar
            className={classes.root}
        >
            {children}
        </MUIToolbar>
    );
};

export default Toolbar;