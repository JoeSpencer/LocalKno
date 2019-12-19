import React, { Component } from 'react';
import { withAuthorization } from '../Session';
import { compose } from 'recompose';
import { withFirebase } from '../Firebase';
import Messages from '../Messages';

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: null,
    };
  }

  componentDidMount() {
    this.props.firebase.users().on('value', snapshot => {
      this.setState({
        users: snapshot.val(),
      });
    });
  }

  componentWillUnmount() {
    this.props.firebase.users().off();
  }

  render() {
    return (
      <div>
        <Messages users={this.state.users} />
      </div>
    );
  }
}

const condition = authUser => !!authUser;

export default compose(
  withFirebase,
  withAuthorization(condition),
)(HomePage);