import styles from "@/components/atoms/Label/styles.module.scss";
import { Props } from "@/containers/atoms/Label";

const Label = (props: Props) => {
  return (
    <label className={styles.checkbox_label} htmlFor={props.index.toString()}>
      {props.name}
    </label>
  );
};

export default Label;
