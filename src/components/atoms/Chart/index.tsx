import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

type Props = {
  options: {
    type: string;
    name: string;
    data: number[][];
  }[];
};

const ChartPresenter: React.FC<Props> = (props: Props) => {
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
        series: props.options,
      }}
    />
  );
};

export default ChartPresenter;
