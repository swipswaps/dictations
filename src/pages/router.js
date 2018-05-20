import "typeface-roboto";
import React from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { HashRouter, Switch, Route } from "react-router-dom";
import Home from './home';
import ListDictations from './list';
import Dictation from './dictation/index';
import dictationsData from '../data/dictations';

const styles = {
  root: {
    fontFamily: 'Roboto',
    display: 'flex',
    flexDirection: 'column',
    flex: 1
  }
};

function Router(props) {
  const { classes } = props;
  return (
    <HashRouter>
      <div className={classes.root}>
        <Switch>
          <Route exact path="/" component={(props) => (<Home {...props} data={dictationsData} />)}/>
          <Route path="/list/:lang" component={(props) => (<ListDictations {...props} data={dictationsData} />)}/>
          <Route path="/dictation/:lang/:id" component={(props) => (<Dictation {...props} data={dictationsData} />)}/>
        </Switch>
      </div>
    </HashRouter>
  );
}

Router.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Router);
