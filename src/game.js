import React from 'react';
import Board from './board'

export default class Game extends React.Component {

    constructor() {
        super();

        this.state = {
            xIsNext: true,
            stepNumber: 0,
            history: [{
                squares: Array(9).fill(null)
            }]
        }
    }

    handleClick(i) {
        alert(this.state.history[i]);
        // const {xIsNext, history} = this.state;
        // const current = history[history - 1];
        // const squares = current.squares.slice();
        //
        // squares[i] = xIsNext ? 'X' : 'O';
        //
        // this.setState({
        //     xIsNext: !xIsNext,
        //     history: history.concat([{squares}]),
        //     stepNumber: ++this.state.stepNumber
        // });
    }

    render() {
        const {xIsNext, stepNumber, history} = this.state;
        const current = history[stepNumber];
        const status = 'Next player is : ' + (xIsNext ? 'X' : 'O');

        return (
            <div className="game">
                <div className="game-board">
                    <Board
                        squears={current.squares}
                        onClick={(i) => this.handleClick(i)}
                    />
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <ul>{/* TODO */}</ul>
                </div>
            </div>
        );
    }
}