import Header from "./Header";
// import Sidebar from "./Sidebar";
import styles from "./DefaultLayout.module.scss";
// import Content from "./Content";
function DefaultLayout({ children }) {
  return (
    <div className={styles.wrapper}>
      <Header />
      {/* <div className={styles.container}>
        <Sidebar />
        <Content />
      </div> */}
    </div>
  );
}

export default DefaultLayout;
