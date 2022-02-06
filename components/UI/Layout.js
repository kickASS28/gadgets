import { Fragment } from "react";
import MainNav from "./MainNav";
import Footer from "./Footer";
const Layout = (props) => {
  return (
    <Fragment>
      <MainNav />
      <main>{props.children}</main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
