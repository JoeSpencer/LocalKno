import React, { Component } from 'react';

class MessageItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editMode: false,
      editText: this.props.message.text,
    };
  }

  onToggleEditMode = () => {
    this.setState(state => ({
      editMode: !state.editMode,
      editText: this.props.message.text,
    }));
  };

  onChangeEditText = event => {
    this.setState({ editText: event.target.value });
  };

  onSaveEditText = () => {
    this.props.onEditMessage(this.props.message, this.state.editText);

    this.setState({ editMode: false });
  };

  render() {
    const { message, onRemoveMessage } = this.props;
    const { editMode, editText } = this.state;

    return (
        <div className='shadow-lg flex flex-wrap mb-8'>
            <div className='bg-bottom border w-full md:w-1/3 h-64 md:h-auto relative'>
            <img className='h-48 w-full object-cover' src='https://picsum.photos/100' alt='text' />
            </div>
            <div className='bg-white w-full md:w-2/3'>
            <div className='h-full mx-auto px-6 md:px-0 md:pt-6 md:-ml-6 relative'>
            <div className='bg-white lg:h-full p-6 -mt-6 md:mt-0 relative mb-4 md:mb-0 flex flex-wrap md:flex-wrap items-center'>
        {editMode ? (
          <input
            type="text"
            value={editText}
            onChange={this.onChangeEditText}
          />
        ) : (
            <div class="w-full lg:w-4/5 lg:px-3">
            <p class="text-md mt-4 lg:mt-0 md:text-left text-sm">
            <strong>
              {message.user.username || message.user.userId}
            </strong>{' '}
            {message.text}<br />
            {message.editedAt && <span>(Edited)</span>}
            </p>
          </div>
        )}
        <div class="w-full lg:w-1/5 mt-6 lg:mt-0 lg:px-4 text-center md:text-left">
        {editMode ? (
          <div>
            <button className='w-full bg-blue-800 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 rounded shadow' onClick={this.onSaveEditText}>Save</button>
            <button className='w-full bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 rounded shadow' onClick={this.onToggleEditMode}>Reset</button>
          </div>
        ) : (
          <div>  
          <button className='w-full bg-blue-800 hover:bg-gray-100 hover:text-blue-800 text-white font-semibold py-2 px-4 mb-4 rounded shadow' onClick={this.onToggleEditMode}>Edit</button>
           </div>
        )}
        
        {!editMode && (
          
          <button
            className='w-full bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 rounded shadow'
            type="button"
            onClick={() => onRemoveMessage(message.uid)}
          >
            Delete
          </button>
          
        )}
        </div>
        </div>
        </div>
        </div>
      </div>
    );
  }
}

export default MessageItem;


