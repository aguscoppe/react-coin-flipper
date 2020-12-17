import "./Coin.css";

function Coin(props) {
  return (
    <div className="Coin">
      <img src={props.coin.imgSrc} alt={props.coin.side} />
    </div>
  );
}

export default Coin;
