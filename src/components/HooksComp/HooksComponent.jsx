import { useState, useEffect } from "react";

import Loading from "../../elements/Loading/Loading";
import ItemList from "../ItemList/ItemList";

const HooksComponent = () => {
  const [loading, setLoading] = useState(true);
  const [resultFetch, setResultFetch] = useState({});
  const [toggle, setToggle] = useState(true);

  const search = toggle ? "character" : "location";
  const URL = `https://rickandmortyapi.com/api/${search}`;

  useEffect(() => {
    setTimeout(() => {
      requestFetch();
    }, 1000);
  }, [toggle]);

  const requestFetch = async () => {
    const response = await fetch(URL);
    const result = await response.json();
    setResultFetch(result);
    setLoading(false);
  };

  return (
    <>
      {loading ? <Loading /> : <ItemList items={resultFetch} />}
      <button onClick={() => setToggle(toggle ? false : true)}>Refresh</button>
    </>
  );
};

export default HooksComponent;
