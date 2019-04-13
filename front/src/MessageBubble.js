// @flow
import React from 'react';
import styled from 'styled-components';



const Box = styled.div`
    text-align: right;
`

const BackGround = styled.div`
    align-items: center;
    display: flex;
    flex: 1 1 0%;
    background: white;
    float: none;
    justify-content: flex-end;
`;

const Bubble = styled.div`
    display: flex;
`

const Span = styled.span`
  background: rgba(0, 0, 0, 0);
  margin: 0px;
  margin-right: 10px;
`

const MessageBubble = ({chat}) => {
    return (
            <Box>
                <Bubble>
                    <BackGround/>
                    <Span>{chat}</Span>
                </Bubble>
            </Box>
    )
}

export default MessageBubble;