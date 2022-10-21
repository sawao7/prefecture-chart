import React from "react";
import MainTitle from "@/components/atoms/MainTitle";
import CheckBoxes from "@/components/organisms/CheckBoxes";
import styles from "@/components/organisms/Main/styles.module.scss";
import Chart from "@/containers/atoms/Chart";

import { Props } from "@/containers/organisms/Main";
import { dataContextType, useDataContext } from "@/hooks/useDataContext";

const Main: React.FC<Props> = (props: Props) => {
  return (
    <main className={styles.main}>
      <div className={styles.contents}>
        <MainTitle />
        <CheckBoxes prefectures={props.prefectures} />
      </div>
      <div className={styles.chart_content}>
        <Chart />
      </div>
    </main>
  );
};

export default Main;
