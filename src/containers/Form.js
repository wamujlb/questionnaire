import React, { Component } from 'react';

export default class Form extends Component {
    constructor(props) {
        super(props);

        this.onInputChange = this.onInputChange.bind(this);
        this.onButtonClick = this.onButtonClick.bind(this);
    }

    onInputChange(e) {
        this.props.inputValue(e.target.value);
    }

    onButtonClick(e) {
        e.preventDefault();

        this.props.addRow({
            userId: this.props.submitAnswer.userId,
            userEmail: this.props.submitAnswer.userEmail,
            userAnswer: this.props.submitAnswer.userAnswer
        });

        console.log(this.props.tableRow);
    }

    render() {
        return (
            <form className="form-wrapper">
                <input type="email" className="st-input" placeholder="Your E-mail" onChange={this.onInputChange}/>
                <button className="btn" onClick={this.onButtonClick}>SUBMIT</button>
            </form>
        );
    }
}