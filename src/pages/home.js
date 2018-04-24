import React from "react";
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import List, {ListItem, ListItemText} from 'material-ui/List';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import { Link } from "react-router-dom";
import {FormattedMessage, defineMessages, injectIntl, intlShape} from 'react-intl';
import getTranslatedLanguage from "../utils/lang-messages"

const messages = defineMessages({
  homeListItem: {
    id: 'home.listItem',
    defaultMessage: 'Dictations in {lang}'
  }
});

const styles = {
  root: {
    flex: 1
  }
};

class Home extends React.Component {
  render () {
    const { classes, data } = this.props;
    const {formatMessage} = this.props.intl;

    const list = Object.keys(data).map((key) => {
      const language = getTranslatedLanguage(formatMessage, key);

      return (
        <ListItem key={key} component={Link} to={"/list/" + key} button>
          <ListItemText primary={formatMessage(messages.homeListItem, {lang: language})} />
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
      </div>
    )
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
  intl: intlShape.isRequired,
};

export default injectIntl(withStyles(styles)(Home));
