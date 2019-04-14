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
    height: 30px;
    font-size: 2em;
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

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.sendMessage(this.state.msg);
        this.setState({
            msg: ''
        })
    }

    render() {
        return (
            <Form>
                <StyledInput
                    value={this.state.msg}
                    onChange={this.handleChange} 
                />
                <button onClick={this.handleSubmit}>aa</button>
            </Form>
        )
    }
}

export default ChatInput;