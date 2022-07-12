import { createContext, useContext, useState } from "react";

const AppContext = createContext();
const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItemToCart = (item) => {
    setCart([...cart, { ...item }]);
  };

  const emptyCart = () => {
    setCart([]);
  };

  return (
    <AppContext.Provider value={{ cart, addItemToCart, emptyCart }}>
      {children}
    </AppContext.Provider>
  );
};

export default useAppContext;
