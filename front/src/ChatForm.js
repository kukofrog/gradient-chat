// @flow
import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import MessageBubble from './MessageBubble';
import ChatInput from './ChatInput';

const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100%;
    margin: 0px;
  }
  #root{
    height: 100%;
  }
  .App{
    height: 100%;
  }
`

const Background = styled.div`
    background: linear-gradient(#FA5EC4, #D03DF5, #91DCF8);
    height: 100%;
    display: flex;
    flex-direction: column-reverse;
`

class ChatForm extends React.Component {
    state = {
        chatList: [
            'aaa',
            'fffa',
            'fsadfdfssd',
            '안녕하세요. 제이름은 형탁이인데 어쩌고저쩌고'
        ]
    }

    sendMessage = (data) => {
      this.setState({
        chatList: [
          ...this.state.chatList,
          data
        ]
      })
    }

    render() {
        return (
            <Background>
                <GlobalStyle />
                    <ChatInput sendMessage={this.sendMessage}/>
                    { this.state.chatList.reverse().map((chat, index)=> {
                        return <MessageBubble className="aaaa" chat={chat} key={index}/>
                    })}
            </Background>
        )
    }
}

export default ChatForm