import Title from "@/components/atoms/Title";
import styles from "@/components/organisms/Header/styles.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <Title />
    </header>
  );
};

export default Header;
