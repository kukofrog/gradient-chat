// @flow
import React from 'react';
import styled from 'styled-components';



const Box = styled.div`
    text-align: right;
`

const Bubble = styled.div`
`

const H3 = styled.h3`
  margin: 0px;
  margin-right: 10px;
`

const MessageBubble = ({chat}) => {
    return (
            <Box>
                <Bubble>
                    <H3>{chat}</H3>
                </Bubble>
            </Box>
    )
}

export default MessageBubble;