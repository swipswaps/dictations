import React from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import lightGreenColor from '@material-ui/core/colors/lightGreen';
import redColor from '@material-ui/core/colors/red';
import {FormattedMessage} from 'react-intl';

const styles = theme => {
  return {
  root: {
    flex: 1,
    display: 'flex'
  },
  correction: {
    flex: 1,
    position: 'relative',
    marginLeft: 12,
    marginTop: '-0.5em',
    marginRight: 12
  },
  textSpan: {
    lineHeight: '4em'
  },
  userText: {
    position: 'absolute',
    top: '1.5em'
  },
  userTextSpan: {
    lineHeight: '4em',
    color: redColor['A700']
  },
  center: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  info: {
    padding: 16,
    backgroundColor: lightGreenColor['A200']
  }
  }
};

class DictationChecking extends React.Component {
  render () {
    const { classes, text, userText } = this.props;

    const correct = text === userText;

    const view = correct ? (
      <div className={classes.center}>
        <Paper className={classes.info} square={false}>
          <FormattedMessage id="checking.info" defaultMessage="Good job !" />
        </Paper>
      </div>
    ) : (
      <div className={classes.correction}>
        <div>
          <span className={classes.textSpan}>{text}</span>
        </div>
        <div className={classes.userText}>
          <span className={classes.userTextSpan}>{userText}</span>
        </div>
      </div>
    )

    return (
      <div className={classes.root}>
        {view}
      </div>
    )
  }
}

DictationChecking.propTypes = {
  text: PropTypes.string.isRequired,
  userText: PropTypes.string.isRequired
};
DictationChecking.defaultProps = {
  text: "",
  userText: ""
};

export default withStyles(styles)(DictationChecking);
