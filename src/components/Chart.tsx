import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import React from "react";

type Props = {
  dataList: {
    name: string;
    data: {
      year: number;
      value: number;
    }[];
  }[];
};

const Chart = (props: Props) => {
  const type = "line";
  const options = props.dataList.map((item) => {
    return {
      type: type,
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
