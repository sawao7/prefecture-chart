import { createContext, useState, useContext } from "react";

export type dataContextType = {
  dataList: {
    name: string;
    data: {
      year: number;
      value: number;
    }[];
  }[];
  setDataList: React.Dispatch<
    React.SetStateAction<
      {
        name: string;
        data: {
          year: number;
          value: number;
        }[];
      }[]
    >
  >;
};

export type dataListType = {
  name: string;
  data: {
    year: number;
    value: number;
  }[];
}[];

export type dataValueType = {
  name: string;
  data: {
    year: number;
    value: number;
  }[];
};

// デフォルトの初期値を入れることを忘れずに
const dataContext = createContext({} as dataContextType);

export function useDataContext() {
  return useContext(dataContext);
}

export const DataListProvider = ({ children }: any) => {
  const [dataList, setDataList] = useState<dataListType>([]);

  const value = {
    dataList,
    setDataList,
  };

  return <dataContext.Provider value={value}>{children}</dataContext.Provider>;
};
