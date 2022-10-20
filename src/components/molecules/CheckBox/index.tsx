import Input from "@/components/atoms/Input";
import Label from "@/components/atoms/Label";
import styles from "@/components/molecules/CheckBox/styles.module.scss";

type Props = {
  key: Number;
  name: string;
  index: Number;
  getPeopleData: Function;
};

const CheckBox = (props: Props) => {
  return (
    <div className={styles.checkbox} key={props.key}>
      <Input index={props.index} name={props.name} getPeopleData={props.getPeopleData} />
      <Label index={props.index} name={props.name} />
    </div>
  );
};

export default CheckBox;
