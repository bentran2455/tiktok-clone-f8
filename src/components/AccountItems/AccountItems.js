import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./AccountItems.module.scss";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function AccountItems({ data }) {
  return (
    <Link to={`/@${data.nickname}`} className={styles.wrapper}>
      <div className={styles.accounts}>
        <img className={styles.avatar} src={data.avatar} alt={data.full_name} />
        <div className={styles.info}>
          <h4>
            <span>{data.full_name}</span>
            {data.tick && (
              <FontAwesomeIcon
                className={styles.blueTick}
                icon={faCheckCircle}
              />
            )}
          </h4>
          <span>{data.nickname}</span>
        </div>
      </div>
    </Link>
  );
}

export default AccountItems;
