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
    overflow-y: scroll;
`

const WhiteBox = styled.div`
  height: 100%;
  background-color: #ffffff;
`

class ChatForm extends React.Component {
    state = {
        chatList: [
        ]
    }

    sendMessage = (data) => {
      this.setState({
        chatList: [
          data,
          ...this.state.chatList
        ]
      })
    }

    render() {
        return (
            <Background>
                <GlobalStyle />
                    <ChatInput sendMessage={this.sendMessage}/>
                    { this.state.chatList.map((chat, index)=> {
                        return <MessageBubble chat={chat} key={index}/>
                    })}
                    <WhiteBox />
            </Background>
        )
    }
}

export default ChatForm