import React from 'react';

export default class Board extends React.Component {

    constructor(props) {
        suprer(props);
    }

    renderSquare(i) {
        return <Square value={i}/>;
    }
}

class Square extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: null,
        };
    }

    render() {
        return (
            <button className="square" onClick={() => this.setState({value: 'X'})}>
                {this.props.value}
            </button>
        );
    }
}