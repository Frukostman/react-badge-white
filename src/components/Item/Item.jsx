import useAppContext from "../../../context/useAppContext";

function Item({ card }) {
  const style = {
    width: "50px",
  };

  const item = card;

  const { addItemToCart, emptyCart } = useAppContext();

  return (
    <div id={card.id}>
      <p>{card.name}</p>
      <div>
        <img src={card.image} alt={card.name} style={style} />
      </div>
      <button onClick={() => addItemToCart(card)}>Add</button>
      <button onClick={() => emptyCart()}>Clear</button>
    </div>
  );
}

export default Item;
