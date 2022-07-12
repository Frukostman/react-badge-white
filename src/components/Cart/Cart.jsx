import useAppContext from "../../../context/useAppContext";

function Cart() {
  const { cart } = useAppContext();

  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {cart.map((item, idx) => {
          return (
            <li key={idx}>
              <p>{item.name}</p>
              <p>{item.species}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Cart;
