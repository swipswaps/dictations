import React from "react";
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import List, {ListItem, ListItemSecondaryAction, ListItemText} from 'material-ui/List';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import { Link } from "react-router-dom";
import pico2waveWorker from "../utils/pico2wave-worker-singleton";
import Audio from "../components/audio";
import PlayButton from "../components/play-button";
import {FormattedMessage, defineMessages, injectIntl, intlShape} from 'react-intl';

const messages = defineMessages({
  homeListItem: {
    id: 'home.listItem',
    defaultMessage: 'Dictation #{id}'
  }
});

const styles = {
  root: {
    flex: 1
  }
};

class Home extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      current: null,
      status: "normal",
      value: 0,
      src: null
    };

    this.play = this.play.bind(this);
    this.timeupdate = this.timeupdate.bind(this);
    this.pico2waveWorker = pico2waveWorker;

    this.pico2waveWorker.onmessage = (m) => {
      this.setState({
        status: "playing",
        src: m.data,
        value: 0
      });
    };
  }

  play(key) {
    this.setState({
      current: key,
      status: "progress",
      src: null
    });
    const text = this.props.data[key];
    this.pico2waveWorker.postMessage(text);
  }

  timeupdate(event) {
    const duration = event.target.duration;
    const currentTime = event.target.currentTime;
    if (!duration) {
      return;
    }

    if (currentTime === duration) {
      this.setState({
        status: "normal"
      });
    } else {
      const value = (currentTime / duration) * 100;
      this.setState({
        value: value
      });
    }
  }

  render () {
    const { classes, data } = this.props;
    const {formatMessage} = this.props.intl;
    const list = Object.keys(data).map((key) => {
      const current = this.state.current === key ? true : false;
      const variant = current ? this.state.status : "normal";
      const value = current ? this.state.value : 0;
      const id = Number(key) + 1;

      return (
        <ListItem key={key} component={Link} to={"/dictation/" + key} button>
          <ListItemText primary={formatMessage(messages.homeListItem, {id: id})} />
          <ListItemSecondaryAction>
            <PlayButton onClick={this.play.bind(this, key)} variant={variant} value={value} />
          </ListItemSecondaryAction>
        </ListItem>
      )
    });

    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography variant="title" color="inherit">
              <FormattedMessage id="home.title" defaultMessage="Dictations" />
            </Typography>
          </Toolbar>
        </AppBar>
        <List component="nav">
          {list}
        </List>
        <Audio src={this.state.src} onTimeUpdate={this.timeupdate} />
      </div>
    )
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
  intl: intlShape.isRequired,
};

export default injectIntl(withStyles(styles)(Home));
