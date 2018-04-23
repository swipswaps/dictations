import React from "react";
import PropTypes from 'prop-types';

class Audio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      src: null,
      play: false
    };
    this.audioRef = React.createRef();
  }

  componentDidUpdate () {
    /**
     * To perform javascript audio play on mobile device we need to play a blank immediatly after a click user event was fired.
     * https://stackoverflow.com/questions/12206631/html5-audio-cant-play-through-javascript-unless-triggered-manually-once#answer-12220394
     */
    if (this.state.src === null) {
      this.audioRef.current.src = process.env.PUBLIC_URL + "/assets/silence.ogg";
      this.audioRef.current.play();
      this.audioRef.current.pause();
    }

    /**
     * To prevent the audio to be played twice we only play when the state src
     * was updated.
     */
    if (this.state.play) {
      this.audioRef.current.play();
    }
  }

  static getDerivedStateFromProps(props, current_state) {
    return {
      src: props.src,
      play: (props.src !== current_state.src ? true : false)
    }
  }

  restart () {
    this.audioRef.current.currentTime = 0;
    this.audioRef.current.play();
  }

  render () {
    const {src, ...otherProps} = this.props;
    return (
      <audio ref={this.audioRef} src={this.state.src} {...otherProps} />
    )
  }
}

Audio.propTypes = {
  src: PropTypes.string,
};
Audio.defaultProps = {
  src: null
};

export default (Audio);
