// Routes for every use
import Home from "../pages/Home";
import Following from "../pages/Following";
import Profile from "../pages/Profile";
import Upload from "../pages/Upload";
import { DefaultLayout, UploadLayout } from "../components/Layout";
const publicRouters = [
  {
    path: "/",
    component: Home,
    layout: DefaultLayout,
  },
  {
    path: "/following",
    component: Following,
    layout: DefaultLayout,
  },
  {
    path: "/@:nickname", // khó hiểu, tại sao :nickname ?
    component: Profile,
    layout: DefaultLayout,
  },
  {
    path: "/upload",
    component: Upload,
    layout: UploadLayout,
  },
];

// Routes  for only logged in users
const privateRouters = [];

export { publicRouters, privateRouters };
