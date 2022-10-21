import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import React from "react";
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

  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={{
        title: {
          text: "人口推移チャート",
        },
        xAxis: {
          title: {
            text: "年度",
          },
        },
        yAxis: {
          title: {
            text: "人口数",
          },
        },
        series: options,
      }}
    />
  );
};

export default Chart;
