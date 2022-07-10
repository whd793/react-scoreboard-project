const players = [
    {
        name: "Guil",
        score: 50
      },
      {
        name: "Treasure",
        score: 85
      },
      {
        name: "Ashley",
        score: 95
      },
      {
        name: "James",
        score: 80
      }
];

const Header = (props) => {
    return (
        <header>
            <h1>{props.title}</h1>
            <span className="stats">Players: {props.totalPlayers}</span>
        </header>
    );
}
const Player = (props) => {
    return (
        <div className="player">
            <span className="player-name">
                {props.name}
            </span>

            <Counter score={props.score} />
        </div>

    );
}
// const Counter = (props) => {
//     return (
//         <div className="counter">
//             <button className="counter-action decrement"> - </button>
//             <span className="counter-score">{props.score}</span>
//             <button className="counter-action increment"> + </button>
//         </div>
//     );
// }

class Counter extends React.Component {
    // state= {
    //     score: 0
    // };

    constructor(){
        super();
        this.state = {
            score: 0
        };
    }

    increment(){
        this.setState({
            score: this.state.score + 1
        });
    }

    render(){
       
        return (
            <div className="counter">
                <button className="counter-action decrement"> - </button>
                <span className="counter-score">{this.state.score}</span>
                <button className="counter-action increment" onClick={this.increment.bind(this)}> + </button>
            </div>
        );
    }
}

const App = (props) => {
    return (
        <div className="scoreboard">
        <Header 
            title="Scoreboard"
            totalPlayers={props.players.length}
            />

            {props.players.map((player)=> {
                return (
                <Player
                    name={player.name}
                    score={player.score}
                    />
                )
            })}
        </div>
      );
}

ReactDOM.render(
    <App players={players} />,
    document.getElementById('root')
);


// ReactDOM.createElement(
//     'App',
//     'class="test-class"'

// )