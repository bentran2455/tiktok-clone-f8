import styles from "./Header.module.scss";
import images from "../../../../assets/images";
import Tippy from "@tippyjs/react";
import "tippy.js/animations/scale.css";
import Button from "../../../Button";
import Menu from "../../../DropDown/Menu";
import UploadIcon from "../../../Icon";
import Search from "../../../Search";
import { faMoon, faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleQuestion,
  faCoins,
  faEllipsisVertical,
  faGear,
  faGlobe,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons/faPlus";

const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faGlobe} />,
    title: "English",
    children: {
      title: "Language",
      data: [
        {
          type: "language",
          code: "en",
          title: "English",
        },
        {
          type: "language",
          code: "vi",
          title: "Tiếng Việt",
        },
      ],
    },
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    title: "Feedback and help",
    to: "/feedback",
  },
  {
    icon: <FontAwesomeIcon icon={faMoon} />,
    title: "Dark Mode",
  },
];
const USER_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faUser} />,
    title: "View Profile",
  },
  {
    icon: <FontAwesomeIcon icon={faCoins} />,
    title: "Get coins",
    to: "/coin",
  },
  {
    icon: <FontAwesomeIcon icon={faHouse} />,
    title: "Creator Tools",
  },
  {
    icon: <FontAwesomeIcon icon={faGear} />,
    title: "Settings",
  },
  ...MENU_ITEMS,
];
function Header() {
  const accountAvail = true;

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <img src={images.logo} alt="Tiktok logo" />

        <Search />

        <div className={styles.actions}>
          {accountAvail ? (
            <>
              <Button to="/upload" text>
                <FontAwesomeIcon icon={faPlus} className={styles.uploadBtn} />
                <span>Upload</span>
              </Button>
              <Tippy
                content="Inbox"
                placement="bottom"
                interactive={true}
                arrow={true}
                animation="scale"
              >
                <UploadIcon className={styles.inboxBtn} width={60} />
              </Tippy>
            </>
          ) : (
            <>
              <Button to="/following" primary href="/">
                Log in
              </Button>
            </>
          )}
          <Menu items={accountAvail ? USER_ITEMS : MENU_ITEMS}>
            {accountAvail ? (
              <img
                src="https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/c56736960c4c37735bc9ed747d5a680d.jpeg?lk3s=a5d48078&nonce=92970&refresh_token=9a9929c953f8e8976a24e38740944c14&x-expires=1727074800&x-signature=GpHA4qj6MCA3NUMYbEJvM8Z0xyc%3D&shp=a5d48078&shcp=81f88b70"
                alt="Avatar"
                className={styles.userAvatar}
              />
            ) : (
              <button className={styles.moreMenu}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            )}
          </Menu>
        </div>
      </div>
    </div>
  );
}

export default Header;
