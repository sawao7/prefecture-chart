import styles from "@/components/atoms/Input/styles.module.scss";

type Props = {
  index: Number;
  name: string;
  getPeopleData: Function;
};

const Input = (props: Props) => {
  return (
    <input
      id={props.index.toString()}
      className={styles.checkbox_box}
      type="checkbox"
      onChange={(e) => props.getPeopleData(props.index, props.name, e.target.checked)}
    />
  );
};

export default Input;
