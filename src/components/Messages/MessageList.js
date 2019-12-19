import React from 'react';

import MessageItem from './MessageItem';

const MessageList = ({
  messages,
  onEditMessage,
  onRemoveMessage,
}) => (
    <div>
    {messages.map(message => (
      <MessageItem
        key={message.uid}
        message={message}
        onEditMessage={onEditMessage}
        onRemoveMessage={onRemoveMessage}
      />
    ))}
  </div>
);

export default MessageList;