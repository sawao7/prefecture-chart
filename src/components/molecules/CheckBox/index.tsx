import Input from "@/components/atoms/Input";
import Label from "@/components/atoms/Label";
import styles from "@/components/molecules/CheckBox/styles.module.scss";

type Props = {
  key: Number;
  name: string;
  index: Number;
};

const CheckBox = (props: Props) => {
  return (
    <div className={styles.checkbox} key={props.key}>
      <Input index={props.index} name={props.name} />
      <Label index={props.index} name={props.name} />
    </div>
  );
};

export default CheckBox;
