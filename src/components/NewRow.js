import React, { Component } from 'react';

export default class NewRow extends Component {
    render() {
        return (
            <tr>
                <td>{ this.props.userId }</td>
                <td>{ this.props.userEmail }</td>
                <td>{ this.props.userAnswer }</td>
            </tr>
        );
    }
}


