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
    background: linear-gradient(#FA5EC4, #D03DF5, #91DCF8);
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
                        return <MessageBubble className="aaaa" chat={chat}/>
                    })}
            </Background>
        )
    }
}

export default ChatForm