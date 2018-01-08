import React from 'react';
import Board from './board'

export default class Game extends React.Component {

    constructor(){
        super();

        this.state = {
            xIsNext: true,
            stepNumber : 0,
            history: [{
                squares: Array(9).fill(null)
            }]
        }
    }

    handleClick(i){
        console.log('HandleClick ' + i , i);
    }

    render() {
        const {xIsNext, stepNumber, history} = this.state;
        const current = history[stepNumber];
        const status = 'Next player is : ' + (xIsNext ? 'X' : 'O');



        return (
            <div className="game">
                <div className="game-board">
                    <Board
                    squears ={current.squares}
                    onClick ={(i) => this.handleClick(i)}
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