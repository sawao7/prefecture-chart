import React from "react";
import ChartPresenter from "@/components/atoms/Chart";
import { dataContextType, useDataContext } from "@/hooks/useDataContext";

const Chart: React.FC = () => {
  const { dataList, setDataList }: dataContextType = useDataContext();
  const options = dataList.map((item) => {
    return {
      type: "line",
      name: item.name,
      data: item.data.map((item) => [item.year, item.value]),
    };
  });

  return <ChartPresenter options={options} />;
};

export default Chart;
