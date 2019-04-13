// @flow
import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import MessageBubble from './MessageBubble';

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

    render() {
        return (
            <Background>
                <GlobalStyle />
                    { this.state.chatList.reverse().map((chat)=> {
                        return <MessageBubble className="aaaa" chat={chat}/>
                    })}
            </Background>
        )
    }
}

export default ChatForm