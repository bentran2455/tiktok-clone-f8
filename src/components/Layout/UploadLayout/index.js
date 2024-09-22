import Header from "../DefaultLayout/Header";
function UploadLayout({ children }) {
  return (
    <div>
      <Header></Header>
      <div className="container">
        <div className="content">{children}</div>
      </div>
    </div>
  );
}

export default UploadLayout;
