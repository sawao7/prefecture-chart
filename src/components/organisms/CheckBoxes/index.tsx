import React from "react";
import CheckBox from "@/components/molecules/CheckBox";
import styles from "@/components/organisms/CheckBoxes/styles.module.scss";
import { Props } from "@/containers/organisms/CheckBoxes";

const CheckBoxes: React.FC<Props> = (props: Props) => {
  return (
    <div className={styles.checkboxes}>
      {props.prefectures.map((name, index) => {
        return <CheckBox key={index} name={name} index={index} />;
      })}
    </div>
  );
};

export default CheckBoxes;
