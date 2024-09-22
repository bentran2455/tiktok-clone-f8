import styles from "./DropDown.module.scss";

function Wrapper({ children }) {
  return <div className={styles.wrapper}>{children}</div>;
}

export default Wrapper;
