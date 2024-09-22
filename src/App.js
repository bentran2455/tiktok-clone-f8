import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { publicRouters } from "./routes";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {publicRouters.map((route, index) => {
          const Page = route.component;
          let Layout = route.layout;
          return (
            <Route
              key={index}
              path={route.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            ></Route>
          );
        })}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
