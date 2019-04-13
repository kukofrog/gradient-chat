// @flow
import React from 'react';
import styled from 'styled-components';



const Box = styled.div`
  display: flex;
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
        border: 1px solid #ffffff;
        border-bottom-left-radius: 48px;
        border-top-left-radius: 48px;
`
const B = styled.div`
&:after{
    position: absolute;
    border: 30px solid #ffffff;
    bottom: -30px;
    top: -30px;
    left:-30px;
    right: -30px;
    border-bottom-left-radius: 48px;
    border-top-left-radius: 48px;
    margin-right: 5px;
}
`

const A = styled.span`
    
`

const Span = styled.span`
  background: rgba(0, 0, 0, 0);
  margin: 0px;
  margin-right: 5px;
  margin-left: 5px;
  font-size: 2em;
`

const MessageBubble = ({chat}) => {
    return (
            <Box>
            <BackGround/>
                <Bubble>
                  <A>
                    <Span>{chat}</Span>
                  </A>
                </Bubble>
            </Box>
    )
}

export default MessageBubble;