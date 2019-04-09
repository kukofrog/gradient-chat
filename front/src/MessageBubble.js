// @flow
import React from 'react';
import styled from 'styled-components';


const MessageBubble = ({chat}) => {
    return (
        <div>
            <h3>{chat}</h3>
        </div>
    )
}

export default MessageBubble;