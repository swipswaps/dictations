import React from "react";
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import RefreshIcon from '@material-ui/icons/Refresh';
import CircularProgress from '@material-ui/core/CircularProgress';

class PlayButton extends React.Component {
  render () {
    const { classes, variant, value, ...otherProps } = this.props;

    var icon;
    switch (variant) {
      default:
      case "normal":
        icon =
          <IconButton {...otherProps} color="inherit">
            <PlayArrowIcon />
          </IconButton>
        break;
      case "progress":
        icon =
          <IconButton color="inherit">
            <CircularProgress size={24} />
          </IconButton>
        break;
      case "playing":
        icon =
          <IconButton color="inherit">
            <CircularProgress size={24} variant="static" value={value} />
          </IconButton>
        break;
      case "restart":
        icon =
          <IconButton {...otherProps} color="inherit">
            <RefreshIcon />
          </IconButton>
        break;
    }

    return (
      <div>
        {icon}
      </div>
    )
  }
}

PlayButton.propTypes = {
  progress: PropTypes.string,
  value: PropTypes.number,
};
PlayButton.defaultProps = {
  progress: "normal",
  value: 0
};

export default (PlayButton);
