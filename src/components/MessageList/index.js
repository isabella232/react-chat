import React, { Component } from 'react';
import Message from '../Message';
import './style.css';

export default class MessageList extends Component {
  state = {
    messages: {
      1: {
        user: 'Judy',
        text: 'Hello John',
      },
      2: {
        user: 'John',
        text: 'Yo Judy',
      }
    },
  };

  render() {
    const { messages } = this.state;
    const ids = Object.keys(messages);

    return (
      <ul className="message-list">
        { 
          ids.map(id => <Message key={id} { ...messages[id] } />)
        }
      </ul>
    );
  }
}
