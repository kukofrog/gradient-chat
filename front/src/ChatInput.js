// @flow
import React from 'react';
import styled from 'styled-components';
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
            <div>
                <input 
                    value={this.state.msg}
                    onChange={this.handleChange} 
                />
                <button onClick={this.handleSubmit}>aa</button>
            </div>
        )
    }
}

export default ChatInput;