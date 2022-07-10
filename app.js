// const players = [
//     {
//         name: "Guil",
//         score: 50
//       },
//       {
//         name: "Treasure",
//         score: 85
//       },
//       {
//         name: "Ashley",
//         score: 95
//       },
//       {
//         name: "James",
//         score: 80
//       }
// ];

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
            <button className="remove-player" onClick={() => props.remove(props.id)}>Remove</button>
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

// class Player extends React.Component  {
//     state = {
//         players: [
//             {
//                 name: "Guil",
//                 score: 50
//               },
//               {
//                 name: "Treasure",
//                 score: 85
//               },
//               {
//                 name: "Ashley",
//                 score: 95
//               },
//               {
//                 name: "James",
//                 score: 80
//               }
//         ]
//     };

//     render(){
//         return (
//             <div className="player">
//                 <span className="player-name">
//                     {this.players.name}
//                 </span>

//                 <Counter score={this.players.score} />
//             </div>

//         );
//     }

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

    // increment(){
    //     this.setState({
    //         score: this.state.score + 1
    //     });
    // }

    increment = () => {
        this.setState(prevState => ({
            score: prevState.score + 1
        }));
    }


    decrement = () => {
        this.setState(prevState => ({
            score: prevState.score - 1
        }));
    }

    render(){
       
        return (
            <div className="counter">
                <button className="counter-action decrement" onClick={this.decrement}> - </button>
                <span className="counter-score">{this.state.score}</span>
                {/* <button className="counter-action increment" onClick={this.increment.bind(this)}> + </button> */}
                <button className="counter-action increment" onClick={this.increment}> + </button>

            </div>
        );
    }
}

// const App = (props) => {
//     return (
//         <div className="scoreboard">
//         <Header 
//             title="Scoreboard"
//             totalPlayers={props.players.length}
//             />

//             {props.players.map((player)=> {
//                 return (
//                 <Player
//                     name={player.name}
//                     score={player.score}
//                     />
//                 )
//             })}
//         </div>
//       );
// }


class App extends React.Component {
    state = {
                players: [
                    {
                        name: "Guil",
                        score: 50,
                        id: 1
                      },
                      {
                        name: "Treasure",
                        score: 85,
                        id: 2
                      },
                      {
                        name: "Ashley",
                        score: 95,
                        id: 3
                      },
                      {
                        name: "James",
                        score: 80,
                        id: 4
                      }
                ]
            };


    removePlayer = (id) => {
        // console.log(id);
        this.setState((prevState) => {
                return {
                    players: prevState.players.filter(p => p.id !== id)
                }
                
            });
    }

    render() {
        return (
            <div className="scoreboard">
            <Header 
                title="Scoreboard"
                totalPlayers={this.state.players.length}
                />

                {this.state.players.map((player)=> {
                    return (
                    <Player
                        name={player.name}
                        score={player.score}
                        id={player.id}
                        key={player.id.toString()}
                        remove={this.removePlayer}
                        />
                    )
                })}
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);


// ReactDOM.createElement(
//     'App',
//     'class="test-class"'

// )