import React, { Component } from 'react';

import NewRow from '../components/NewRow';

export default class AnswersTable extends Component {
    render() {
        return (
            <div className="table">
                <table>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>User E-mail</th>
                        <th>Answer</th>
                    </tr>
                    </thead>
                    <tbody>
                        {this.props.tableRow.map(row => {
                            return <NewRow
                                    key={row.userId}
                                    userId={row.userId}
                                    userEmail={row.userEmail}
                                    userAnswer={row.userAnswer}
                                />
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}
