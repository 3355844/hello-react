import React from 'react';
import Cell from './cell'

export default class Board extends React.Component {

    renderCall(i) {
        return <Cell value={this.props.squares[i]}  onClick={ () => this.props.onClick(i)} />;
    }

    render() {
        const status = 'Next player: X';

        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderCall(0)}
                    {this.renderCall(1)}
                    {this.renderCall(2)}
                </div>
                <div className="board-row">
                    {this.renderCall(3)}
                    {this.renderCall(4)}
                    {this.renderCall(5)}
                </div>
                <div className="board-row">
                    {this.renderCall(6)}
                    {this.renderCall(7)}
                    {this.renderCall(8)}
                </div>
            </div>
        );
    }
}