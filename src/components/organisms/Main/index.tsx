import React from "react";
import Chart from "@/components/atoms/Chart";
import MainTitle from "@/components/atoms/MainTitle";
import CheckBoxes from "@/components/organisms/CheckBoxes";
import styles from "@/components/organisms/Main/styles.module.scss";

import { dataContextType, useDataContext } from "@/hooks/useDataContext";

type Props = {
  prefectures: string[];
};

const Main = (props: Props) => {
  // グラフ表示用の人口データリスト
  const { dataList, setDataList }: dataContextType = useDataContext();

  return (
    <main className={styles.main}>
      <div className={styles.contents}>
        <MainTitle />
        <CheckBoxes prefectures={props.prefectures} />
      </div>
      <div className={styles.chart_content}>
        <Chart dataList={dataList} />
      </div>
    </main>
  );
};

export default Main;
