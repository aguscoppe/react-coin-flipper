import Coin from "./Coin";
import React, { Component } from "react";
import { choice } from "./helpers";

class CoinFlipper extends Component {
  static defaultProps = {
    coins: [
      { side: "heads", imgSrc: "https://tinyurl.com/react-coin-heads-jpg" },
      {
        side: "tails",
        imgSrc: "https://www.pcgs.com/UserImages/71009269r.jpg",
      },
    ],
  };
  constructor(props) {
    super(props);
    this.state = {
      totalCount: 0,
      headsCount: 0,
      tailsCount: 0,
      current: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  flipCoin() {
    const newCoin = choice(this.props.coins);
    this.setState((st) => {
      return {
        current: newCoin,
        totalCount: st.totalCount + 1,
        headsCount: st.headsCount + (newCoin.side === "heads" ? 1 : 0),
        tailsCount: st.tailsCount + (newCoin.side === "tails" ? 1 : 0),
      };
    });
  }
  handleClick(e) {
    this.flipCoin();
  }
  render() {
    return (
      <div className="CoinFlipper">
        <h2>Let's flip a coin!</h2>
        {this.state.current && <Coin coin={this.state.current} />}

        <button onClick={this.handleClick}>FLIP ME</button>
        <p>
          Out of {this.state.totalCount} flips, there have been{" "}
          {this.state.headsCount} heads and {this.state.tailsCount} tails.
        </p>
      </div>
    );
  }
}

export default CoinFlipper;
