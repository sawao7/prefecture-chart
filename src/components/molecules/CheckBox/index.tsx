import React from "react";
import Label from "@/components/atoms/Label";
import styles from "@/components/molecules/CheckBox/styles.module.scss";
import Input from "@/containers/atoms/Input";

type Props = {
  name: string;
  index: number;
};

const CheckBox: React.FC<Props> = (props: Props) => {
  return (
    <div className={styles.checkbox}>
      <Input index={props.index} name={props.name} />
      <Label index={props.index} name={props.name} />
    </div>
  );
};

export default CheckBox;
