import React from 'react';
import './dadjokes.css';

export default class DadJoke extends React.Component {
    render() {
        return (
            <div className="joke">
                {this.props.joke}
            </div>
        );
    }
};
