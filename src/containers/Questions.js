import React, { Component } from 'react';

import Answer from '../components/Answer';

export default class Questions extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedRadio: '',
            defaultValue: ''
        };

        this.onInputChange = this.onInputChange.bind(this);
        this.onButtonClick = this.onButtonClick.bind(this);
        this.radioChange = this.radioChange.bind(this);
    }

    radioChange(e) {
        this.setState({
            selectedRadio: e.target.value
        });
        this.props.answerSelect(e.target.value);
    }

    onInputChange(e) {
        this.props.inputValue(e.target.value);
    }

    onButtonClick(e) {
        e.preventDefault();

        let newRow = {
            userId: this.props.submitAnswer.userId++,
            userEmail: this.props.submitAnswer.userEmail,
            userAnswer: this.props.submitAnswer.userAnswer
        };

        this.setState({
            selectedRadio: ''
        });

        this.props.addRow(newRow);

        this.refs.emailInput.value = this.state.defaultValue;
        this.props.answerSelect('');
        this.props.inputValue('');
    }

    render() {
        return (
            <div className="questions">
                <h1 className="questionsTitle">Select { this.props.questionTitle }</h1>
                <div className="answers">
                    {this.props.answers.map(answer => {
                        return <Answer
                            key={answer}
                            answerValue={answer}
                            inputsName={this.props.inputsName}
                            answerSelect={this.props.answerSelect}
                            radioChecked={this.state.radioChecked}
                            checked={this.state.selectedRadio === answer}
                            onClick={this.radioChange}
                        />
                    })}
                </div>

                <form className="form-wrapper">
                    <input type="email" className="st-input" ref="emailInput" placeholder="Your E-mail" onChange={this.onInputChange}/>
                    <button className="btn" onClick={this.onButtonClick}>SUBMIT</button>
                </form>
            </div>
        );
    }
}
