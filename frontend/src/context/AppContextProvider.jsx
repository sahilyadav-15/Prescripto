import { doctors } from "../assets/assets";
import { AppContext } from "./AppContext";

const AppContextProvider = ({ children }) => {
  const value = {
    doctors,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
