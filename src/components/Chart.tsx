import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import React from "react";

const Chart = (props: Props) => {
  const type = "line";
  const options = {
    type: type,
    data: [
      [1000, 1],
      [1100, 2],
      [1200, 3],
      [1300, 4],
    ],
  };

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
