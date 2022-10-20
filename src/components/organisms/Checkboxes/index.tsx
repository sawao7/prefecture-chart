import CheckBox from "@/components/molecules/CheckBox";
import styles from "@/components/organisms/CheckBoxes/styles.module.scss";

type Props = {
  prefectures: string[];
  getPeopleData: Function;
};

const CheckBoxes = (props: Props) => {
  return (
    <div className={styles.checkboxes}>
      {props.prefectures.map((name, index) => {
        return (
          <CheckBox key={index} name={name} index={index} getPeopleData={props.getPeopleData} />
        );
      })}
    </div>
  );
};

export default CheckBoxes;
