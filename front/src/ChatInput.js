// @flow
import React from 'react';
import styled from 'styled-components';

const Form = styled.div`
    display: flex;
`

const StyledInput = styled.input`
    background-color: #ffffff;
    border-top: 1px solid #000000;
    width: 100%;
    height: 50px;
    font-size: 3em;
`

class ChatInput extends React.Component {
    state={
        msg: ''
    }

    handleChange = (e) => {
        this.setState({
            msg: e.target.value
        })
    }

    handleSubmit = () => {
        this.props.sendMessage(this.state.msg);
        this.setState({
            msg: ''
        })
    }

    handlePress = (f) => {
        if(f.key == 'Enter'){
          this.handleSubmit();
        }
    }

    render() {
        return (
            <Form>
                <StyledInput
                    placeholder="메세지를 입력해 보세요"
                    value={this.state.msg}
                    onChange={this.handleChange}
                    onKeyPress={this.handlePress}
                />
                <button onClick={this.handleSubmit}>Send</button>
            </Form>
        )
    }
}

export default ChatInput;