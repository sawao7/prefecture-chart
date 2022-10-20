import Input from "@/components/atoms/Input";
import Label from "@/components/atoms/Label";
import styles from "@/components/molecules/CheckBox/styles.module.scss";

type Props = {
  name: string;
  index: number;
};

const CheckBox = (props: Props) => {
  return (
    <div className={styles.checkbox}>
      <Input index={props.index} name={props.name} />
      <Label index={props.index} name={props.name} />
    </div>
  );
};

export default CheckBox;
