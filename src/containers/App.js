import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import '../styles/App.css';

// Components
import Questions from './Questions';

// Containers
import AnswersTable from '../containers/AnswersTable';

// Actions
import * as submitActions from '../actions/submitActions';

class App extends Component {
    render() {

        const { answerSelect } = this.props.submitActions;
        const { inputValue } = this.props.submitActions;
        const { addRow } = this.props.submitActions;
        const submitAnswer = this.props.submitAnswer;

        return (
            <div className="App">
                <div className="wrapper">
                    {/* Login */}
                    <div className="Login">
                        Hello, { this.props.user.name }
                        <a href="#" className="btn">Login</a>
                    </div>

                    {/* Questions */}
                    {this.props.questions.questionsList.map(question => {
                        return <Questions
                            key={question.questionTitle}
                            questionTitle={question.questionTitle}
                            inputsName={question.inputsName}
                            answers={question.answers}
                            answerSelect={answerSelect}

                            submitAnswer={submitAnswer}

                            inputValue={inputValue}
                            addRow={addRow}
                        />
                    })}

                </div>

                {/* AnswersTable */}
                <AnswersTable
                    tableRow={this.props.answersTable.rows}
                />

            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        questions: state.questions,
        user: state.user,
        submitAnswer: state.submitAnswer,
        answersTable: state.answersTable
    }
}

function mapDispatchToProps(dispatch) {
    return {
        submitActions: bindActionCreators(submitActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
