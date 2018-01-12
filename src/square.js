import React from "react";

export default class Square extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: null,
        };
    }

    renderSquare(i) {
        return <Square
            value={this.state.squares[i]}
            onClick={() => this.handleClick(i)}
        />;
    }

    render() {
        return (
            <button className="square" onClick={() => this.props.onClick()}>
                {this.props.value}
            </button>
        );
    }
}
