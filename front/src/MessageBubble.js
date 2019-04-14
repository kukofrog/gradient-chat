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
    // border: 1px solid #ffffff;
    overflow: hidden;
`

const B = styled.div`
  &:after {
    border: 30px solid white;
    bottom: -30px;
    content: '';
    display: block;
    left: -30px;
    pointer-events: none;
    position: absolute;
    right: -30px;
    top: -30px;

    // border-bottom-right-radius: 48px;
    // border-top-right-radius: 48px;
    // border-bottom-left-radius: 48px;
    // border-top-left-radius: 48px;
}
`

const S2 = styled.span`
  border: 30px solid white;
  bottom: -30px;
  content: '';
  display: block;
  left: -30px;
  pointer-events: none;
  position: absolute;
  right: -30px;
  top: -30px;
`


const Span = styled.span`
  background: rgba(0, 0, 0, 0);
  margin: 0px;
  margin-right: 5px;
  margin-left: 5px;
  font-size: 2em;
  display:block;
  
`

const MessageBubble = ({chat}) => {
    return (
            <Box>
            <BackGround/>
                <Bubble>
                      <Span><span>{chat}</span></Span>
                </Bubble>
            </Box>
    )
}

export default MessageBubble;