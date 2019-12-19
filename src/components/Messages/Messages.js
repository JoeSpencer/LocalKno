import React, { Component } from 'react';

import { AuthUserContext } from '../Session';
import { withFirebase } from '../Firebase';
import MessageList from './MessageList';

class Messages extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
      loading: false,
      messages: [],
      limit: 10,
    };
  }

  componentDidMount() {
    this.onListenForMessages();
  }

  onListenForMessages = () => {
    this.setState({ loading: true });

    this.props.firebase
      .messages()
      .orderByChild('createdAt')
      .limitToLast(this.state.limit)
      .on('value', snapshot => {
        const messageObject = snapshot.val();

        if (messageObject) {
          const messageList = Object.keys(messageObject).map(key => ({
            ...messageObject[key],
            uid: key,
          }));

          this.setState({
            messages: messageList,
            loading: false,
          });
        } else {
          this.setState({ messages: null, loading: false });
        }
      });
  };

  componentWillUnmount() {
    this.props.firebase.messages().off();
  }

  onChangeText = event => {
    this.setState({ text: event.target.value });
  };

  onCreateMessage = (event, authUser) => {
    this.props.firebase.messages().push({
      text: this.state.text,
      userId: authUser.uid,
      createdAt: this.props.firebase.serverValue.TIMESTAMP,
    });

    this.setState({ text: '' });

    event.preventDefault();
  };

  onEditMessage = (message, text) => {
    this.props.firebase.message(message.uid).set({
      ...message,
      text,
      editedAt: this.props.firebase.serverValue.TIMESTAMP,
    });
  };

  onRemoveMessage = uid => {
    this.props.firebase.message(uid).remove();
  };

  onNextPage = () => {
    this.setState(
      state => ({ limit: state.limit + 5 }),
      this.onListenForMessages,
    );
  };

  render() {
    const { users } = this.props;
    const { text, messages, loading } = this.state;

    return (
      <AuthUserContext.Consumer>
        {authUser => (
          <div className='container mt-8 mx-auto p-4 max-w-4xl md:p-0'>
            

            {loading && <div>Loading ...</div>}

            {messages && (
              <MessageList
                messages={messages.map(message => ({
                  ...message,
                  user: users
                    ? users[message.userId]
                    : { userId: message.userId },
                }))}
                onEditMessage={this.onEditMessage}
                onRemoveMessage={this.onRemoveMessage}
              />
            )}
            
            {!loading && messages && (
              <button type="button" onClick={this.onNextPage}>
                More..
              </button>
            )}

            {!messages && <div>There are no messages ...</div>}

            <form
              className="bg-teal-200 shadow-md rounded px-8 pt-6 pb-8 mb-4"
              onSubmit={event =>
                this.onCreateMessage(event, authUser)
              }
            >
              <input
                className="w-full shadow-inner p-4 border-0"
                type="text"
                rows="6"
                value={text}
                onChange={this.onChangeText}
              />
              <button className='bg-blue-800 hover:bg-gray-100 hover:text-blue-800 text-white font-semibold py-2 px-4 mt-4 rounded shadow' type="submit">Send</button>
            </form>
          </div>
        )}
      </AuthUserContext.Consumer>
    );
  }
}

export default withFirebase(Messages);