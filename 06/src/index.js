'use strict';
// class Square extends React.Component{
//     constructor(props){
//         super(props);
//         this.state={
//             value:null,
//         }
//     }
//     render(){
//         return <button className="square" onClick={()=>{
//             this.props.onClick({value:"X"})
//         }}>
//             {this.props.value}
//         </button>
//     }
// }

//封装成函数式组件
function Square(props) {
    return <button className="square" onClick={props.onClick}>
        {props.value}
    </button>
}
class Board extends React.Component {
    // [
    //     'O', null, 'X',
    //     'X', 'X', 'O',
    //     'O', null, null,
    //   ]

    // 这里的数据由Game父组件提供
    // constructor(props){
    //     super(props);
    //     this.state={
    //         squares:Array(9).fill(null),
    //         xIsNext:true,
    //     }
    // }
    // handleClick(i){
    //     const squares=this.state.squares.slice();
    //     //当有人胜出时或者当前被填充了，当前不做任何处理
    //     if(calculateWinner(squares)||squares[i]){
    //         return;
    //     }
    //     // 因为不能直接修改state里面的值，所以要先把这个state单独先拿出来

    //     squares[i]=this.state.xIsNext?'X':'O';
    //     this.setState({squares:squares,xIsNext:!this.state.xIsNext})
    // }
    renderSquare(i) {
        //渲染下标对应的上面生成的数组里面的值
        return <Square value={this.props.squares[i]}
            onClick={() => { this.props.onClick(i) }}
        />
    }
    render() {
        // const winner=calculateWinner(this.state.squares);
        // let status;
        // // const status="Next player："+(this.state.xIsNext?"X":"O");
        // if(winner){
        //     status='Winner'+winner
        // }else{
        //     status='Next player:'+(this.state.xIsNext?"X":"O");
        // }
        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        )
    }
}

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [{
                squares: Array(9).fill(null),
            }],
            xIsNext: true,
            stepNumber:0,
        }
    }
    handleClick(i){
        const history = this.state.history;
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            history: history.concat([{
                squares: squares,
            }]),
            stepNumber:history.length,
            xIsNext: !this.state.xIsNext,
        });
    }
    jumpTo(step) {
        this.setState({
          stepNumber: step,
          xIsNext: (step % 2) === 0,
        });
      }
    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = calculateWinner(current.squares);
        let status;

        const moves = history.map((step, move) => {
            const desc = move ?
              'Go to move #' + move :
              'Go to game start';
            return (
              <li key={move}>
                <button onClick={() => this.jumpTo(move)}>{desc}</button>
              </li>
            );
          });

        if (winner) {
            status = 'Winner: ' + winner;
        } else {
            status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        }
        return <div className='game'>
            <div className="game-board">
                <Board
                    squares={current.squares}
                    onClick={(i) => this.handleClick(i)} />
            </div>
            <div className="game-info">
                <div>{status}</div>
                <ol>{moves}</ol>
            </div>
        </div>
    }
}


function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}



const domContainer = document.getElementById('root');
ReactDOM.render(<Game />, domContainer);