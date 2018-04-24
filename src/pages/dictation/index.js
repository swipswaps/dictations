import React from "react";
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Link } from "react-router-dom";
import {FormattedMessage} from 'react-intl';
import pico2waveWorker from "../../utils/pico2wave-worker-singleton";
import textToDictation from "../../text-to-dictation"
import DictationLoading from "./loading"
import DictationChecking from "./checking"
import TextField from 'material-ui/TextField';
import CheckIcon from '@material-ui/icons/Check';
import RefreshIcon from '@material-ui/icons/Refresh';
import Audio from "../../components/audio";
import PlayButton from "../../components/play-button";

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1
  },
  backButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  flex: {
    flex: 1,
  },
  main: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column'
  },
  textField: {
    flex: 1,
    margin: 20
  },
  toolbar: {
    display: 'flex'
  }
};

class Dictation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: "playing",
      value: 0,
      src: null,
      progress: false,
      text: "",
      mode: "loading",
      userText: ""
    };

    this.play = this.play.bind(this);
    this.check = this.check.bind(this);
    this.change = this.change.bind(this);
    this.reload = this.reload.bind(this);
    this.restart = this.restart.bind(this);
    this.timeupdate = this.timeupdate.bind(this);

    this.audioRef = React.createRef();

    this.pico2waveWorker = pico2waveWorker;
    this.pico2waveWorker.onmessage = (m) => {
      this.setState({
        progress: false,
        src: m.data
      });
    };
  }

  static getDerivedStateFromProps(props, current_state) {
    const { match, data } = props;
    const lang = match.params.lang;
    const id = match.params.id;
    const text = data[lang][id];

    var progress;
    var mode = current_state.mode;
    if (text !== current_state.text) {
      progress = true;
      mode = "loading";
    } else {
      progress = false;
    }

    return {
      id: id,
      text: text,
      progress: progress,
      mode: mode
    }
  }

  play () {
    this.setState({
      mode: "playing",
      status: "playing"
    });
  }

  check () {
    this.setState({mode: "checking"});
  }

  reload () {
    this.setState({
      mode: "playing",
      userText: ""
    });
  }

  change (event) {
    const userText = event.target.value;
    this.setState({userText: userText});
  }

  timeupdate(event) {
    const duration = event.target.duration;
    const currentTime = event.target.currentTime;
    if (!duration) {
      return;
    }

    if (currentTime === duration) {
      this.setState({
        status: "restart"
      });
    } else {
      const value = (currentTime / duration) * 100;
      this.setState({
        value: value
      });
    }
  }

  restart() {
    this.setState({
      status: "playing",
      value: 0
    });
    this.audioRef.current.restart();
  }

  render () {
    const { classes, match } = this.props;
    const lang = match.params.lang;
    const id = Number(this.state.id) + 1;

    if (this.state.progress) {
      const dictation = textToDictation(this.state.text);
      this.pico2waveWorker.postMessage({
        lang: lang,
        text: dictation
      });
    }

    var toolbar;
    switch (this.state.mode) {
      default:
      case "loading":
        toolbar = null;
        break;
      case "playing":
        const variant = this.state.status;
        const value = this.state.status === "playing" ? this.state.value : 0;
        toolbar =
          <div className={classes.toolbar}>
            <PlayButton onClick={this.restart} variant={variant} value={value} />
            <IconButton color="inherit" onClick={this.check}>
              <CheckIcon />
            </IconButton>
          </div>
        break;
      case "checking":
        toolbar =
          <IconButton color="inherit" onClick={this.reload}>
            <RefreshIcon />
          </IconButton>
        break;
    }


    var view;
    switch (this.state.mode) {
      default:
      case "loading":
        view = <DictationLoading progress={this.state.progress} onClick={this.play} />
        break;
      case "playing":
        view =
          <TextField
            id="multiline-static"
            multiline
            className={classes.textField}
            spellCheck="false" autoComplete="off" autoCorrect="off"
            autoFocus={true}
            onChange={this.change}
          />
        break;
      case "checking":
        view = <DictationChecking text={this.state.text} userText={this.state.userText} />
        break;
    }

    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Toolbar>
            <IconButton component={Link} to={"/list/" + lang} className={classes.backButton} color="inherit">
              <ArrowBackIcon />
            </IconButton>
            <Typography variant="title" color="inherit" className={classes.flex}>
              <FormattedMessage id="dictation.title" defaultMessage="Dictation #{id}" values={{id: id}} />
            </Typography>
            {toolbar}
          </Toolbar>
        </AppBar>
        <div className={classes.main}>
          {view}
        </div>
        <Audio src={this.state.mode === "playing" ? this.state.src : null} onTimeUpdate={this.timeupdate} ref={this.audioRef} />
      </div>
    )
  }
}

Dictation.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Dictation);
