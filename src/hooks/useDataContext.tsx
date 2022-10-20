import { createContext, useState, useContext } from "react";

const dataContext = createContext();

export function useDataContext() {
  return useContext(dataContext);
}

export const CountProvider = ({ children }) => {
  const [dataList, setDataList] = useState<
    {
      name: string;
      data: {
        year: number;
        value: number;
      }[];
    }[]
  >([]);

  const value = {
    dataList,
    setDataList,
  };

  return <dataContext.Provider value={value}>{children}</dataContext.Provider>;
};
