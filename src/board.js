import React from "react";

export default class Board extends React.Component {

    renderCol(i) {
        return <button className="square">{i}</button>
    }

    render() {
        const status = 'Next player: X';

        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderCol(0)}
                    {this.renderCol(1)}
                    {this.renderCol(2)}
                </div>
                <div className="board-row">
                    {this.renderCol(3)}
                    {this.renderCol(4)}
                    {this.renderCol(5)}
                </div>
                <div className="board-row">
                    {this.renderCol(6)}
                    {this.renderCol(7)}
                    {this.renderCol(8)}
                </div>
            </div>
        );
    }
}