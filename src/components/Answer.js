import React, { Component } from 'react';

export default class Answer extends Component {
    render() {
        return (
            <div className="radio-input-wrapper">
                <label>
                    <input type="radio"
                           value={this.props.answerValue}
                           onClick={this.props.onClick}
                           checked={this.props.checked}
                    />
                    <span>{this.props.answerValue}</span>
                </label>
            </div>
        );
    }
}


