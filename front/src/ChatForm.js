// @flow
import React from 'react';
import styled from 'styled-components';
import MessageBubble from './MessageBubble';

const Background = styled.div`
    background: linear-gradient(red, yellow);
    : 100%;
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
                { this.state.chatList.map((chat)=> {
                    return <MessageBubble chat={chat}/>
                })}
            </Background>
        )
    }
}

export default ChatForm