import React from "react";
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { CircularProgress } from 'material-ui/Progress';
import Button from 'material-ui/Button';
import {FormattedMessage} from 'react-intl';

const styles = {
  root: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  loading: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  loadingMessage: {
    marginTop: 10
  }
};

class DictationLoading extends React.Component {
  render () {
    const { classes, progress, ...otherProps } = this.props;
    const message = progress ? (
      <div className={classes.loading}>
        <CircularProgress />
        <div className={classes.loadingMessage}>
          <FormattedMessage id="loading.message" defaultMessage="Dictation is being prepared" />
        </div>
      </div>
    ) : (
      <Button variant="raised" color="primary" {...otherProps}>
        <FormattedMessage id="loading.button" defaultMessage="Start dictation" />
      </Button>
    );

    return (
      <div className={classes.root}>
        {message}
      </div>
    )
  }
}

DictationLoading.propTypes = {
  progress: PropTypes.bool,
};
DictationLoading.defaultProps = {
  progress: false
};

export default withStyles(styles)(DictationLoading);
