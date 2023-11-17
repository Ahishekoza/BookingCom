import { useState, useContext, createContext } from "react";

const dateContext = createContext();
const DateProvider = ({ children }) => {
  const [traveldate, setTravelDate] = useState([]);


 

  return (
    <dateContext.Provider value={[traveldate,setTravelDate]}>
      {children}
    </dateContext.Provider>
  );
};

// custom hook
const useCart  = () => useContext(dateContext);

export { useCart , DateProvider };