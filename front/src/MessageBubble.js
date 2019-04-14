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
`

const B = styled.div`
  &:after {
    border: 30px solid white;
    border-radius: 36px;
    border-bottom-left-radius: 48px;
    border-top-left-radius: 48px;
    bottom: -30px;
    content: '';
    position: absolute;
    left: -30px;
    pointer-events: none;
    right: -30px;
    top: -30px;
    z-index: 3;
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
                  <B>
                    <A>
                      <Span>{chat}</Span>
                    </A>
                  </B>
                </Bubble>
            </Box>
    )
}

export default MessageBubble;