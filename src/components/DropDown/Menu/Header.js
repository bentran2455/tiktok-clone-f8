import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Menu.module.scss";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

function MenuHeader({ title, onBack }) {
  return (
    <header className={styles.menuHeader}>
      <button className={styles.backBtn} onClick={onBack}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <h4 className={styles.headerTitle}>{title}</h4>
    </header>
  );
}

export default MenuHeader;
