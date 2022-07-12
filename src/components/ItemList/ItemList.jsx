import Item from "../Item/Item";

function ItemList({ items }) {
  const list = items.results;

  return (
    <div>
      <p>Items</p>
      <div>
        {list.slice(0, 4).map((item, index) => {
          return <Item key={index} card={item} />;
        })}
      </div>
    </div>
  );
}

export default ItemList;
