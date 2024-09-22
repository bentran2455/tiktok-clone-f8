import styles from "./Search.module.scss";
import Tippy from "@tippyjs/react/headless";
import AccountItems from "../AccountItems/AccountItems";
import DropDownWrapper from "../DropDown/Wrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import {
  faMagnifyingGlass,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";
function Search() {
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (!searchValue.trim()) {
      setSearchResult([]);
      return;
    }
    setLoading(true);
    fetch(
      `https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(
        searchValue
      )}&type=less`
    )
      .then((res) => res.json())
      .then((res) => {
        setSearchResult(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(true));
  }, [searchValue]);
  const inputRef = useRef();
  return (
    <Tippy
      visible={searchValue.trim() ? true : false}
      interactive={true}
      render={(attrs) => (
        <div className={styles.searchResult} tabIndex="-1" {...attrs}>
          <DropDownWrapper>
            <h4 className={styles.label}>Accounts</h4>
            {searchResult.map((result) => (
              <AccountItems key={result.id} data={result} />
            ))}
          </DropDownWrapper>
        </div>
      )}
    >
      <form className={styles.searchForm}>
        <input
          ref={inputRef}
          value={searchValue}
          className={styles.searchInput}
          type="text"
          placeholder="Search"
          onChange={(e) => setSearchValue(e.target.value)}
        />
        {loading && (
          <FontAwesomeIcon className={styles.loadingBtn} icon={faSpinner} />
        )}

        {!!searchValue && !loading && (
          <button
            className={styles.clearBtn}
            onClick={() => {
              setSearchValue("");
              inputRef.current.focus();
            }}
          >
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
        )}
        <button className={styles.searchBtn}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </form>
    </Tippy>
  );
}

export default Search;
