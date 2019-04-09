// @flow
import React from 'react';
import styled from 'styled-components';

const H3 = styled.h3`
  margin: 0px;
`

const MessageBubble = ({chat}) => {
    return (
        <div>
            <H3>{chat}</H3>
        </div>
    )
}

export default MessageBubble;