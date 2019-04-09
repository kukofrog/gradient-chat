// @flow
import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import MessageBubble from './MessageBubble';

const GlobalStyle = createGlobalStyle`
  html, body {
    width: 100%; 
    height: 100%;
    margin: 0px;
  }
  #root{
    width: 100%; 
    height: 100%;
  }
  .App{
    width: 100%; 
    height: 100%;
  }
`

const Background = styled.div`
    background: linear-gradient(#99BEFA, #D03DF5);
    height: 100%;
    width: 100%
`

class ChatForm extends React.Component {
    state = {
        chatList: [
            'aaa',
            'fffa',
            'fsadfdfssd'
        ]
    }

    render() {
        return (
            <Background>
                <GlobalStyle />
                { this.state.chatList.map((chat)=> {
                    return <MessageBubble chat={chat}/>
                })}
            </Background>
        )
    }
}

export default ChatForm