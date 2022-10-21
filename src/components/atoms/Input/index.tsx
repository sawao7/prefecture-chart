import React from "react";
import styles from "@/components/atoms/Input/styles.module.scss";

type Props = {
  index: number;
  name: string;
  getPeopleData: Function;
};
const InputPresenter: React.FC<Props> = (props: Props) => {
  return (
    <input
      id={props.index.toString()}
      className={styles.checkbox_box}
      type="checkbox"
      onChange={(e) => props.getPeopleData(props.index, props.name, e.target.checked)}
    />
  );
};

export default InputPresenter;
