import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "gatsby";

const styles = theme => ({
  appBar: {
    position: "static"
  },
  toolbarTitle: {
    flex: 1
  },
  linkStyle: {
    linkStyle: "none"
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(900 + theme.spacing.unit * 3 * 2)]: {
      width: 900,
      marginLeft: "auto",
      marginRight: "auto"
    }
  }
});

function Layout(props) {
  const { classes } = props;
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography
            variant="h6"
            color="inherit"
            noWrap
            className={classes.toolbarTitle}
          >
            My Blog
          </Typography>
          <Button color="inherit">Support</Button>
          <Button
            color="inherit"
            style={{ marginRight: "2px" }}
            variant="outlined"
          >
            <Link
              to="/login"
              style={{ textDecoration: "none", color: "white" }}
            >
              Login
            </Link>
          </Button>

          <Button color="inherit" variant="outlined">
            <Link
              to="/signup"
              style={{ textDecoration: "none", color: "white" }}
            >
              Signup
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
      <main className={classes.layout}>{props.children}</main>
    </React.Fragment>
  );
}

Layout.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Layout);
