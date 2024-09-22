import Tippy from "@tippyjs/react/headless";
import "tippy.js/animations/scale.css";
import MenuItems from "./MenuItem";
import DropDownWrapper from "../Wrapper";
import styles from "./Menu.module.scss";
import MenuHeader from "./Header";
import { useState } from "react";
function Menu({ children, items = [] }) {
  const [history, setHistory] = useState([{ data: items }]);
  const currentPage = history[history.length - 1];
  const renderItems = () => {
    return currentPage.data.map((item, index) => {
      const isParent = !!item.children;
      return (
        <MenuItems
          key={index}
          data={item}
          onClick={() => {
            if (isParent) {
              setHistory((prev) => [...prev, item.children]);
            }
          }}
        />
      );
    });
  };
  return (
    <Tippy
      hideOnClick={true}
      interactive={true}
      animation="scale"
      arrow={true}
      placement="bottom-end"
      render={(attrs) => (
        <div className={styles.menuList} tabIndex="-1" {...attrs}>
          <DropDownWrapper>
            {history.length > 1 && (
              <MenuHeader
                title="Language"
                onBack={() => setHistory((prev) => prev.slice(0, 1))}
              ></MenuHeader>
            )}
            {renderItems()}
          </DropDownWrapper>
        </div>
      )}
    >
      {children}
    </Tippy>
  );
}

export default Menu;
