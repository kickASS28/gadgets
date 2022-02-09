import Link from "next/link";
import { useState } from "react";
import classes from "./MainNav.module.css";
import CSSTransition from "react-transition-group/CSSTransition";
import Brand from "./Icons/BrandIcon";
import MenuIcon from "./Icons/MenuIcon";
import MenuCLoseIcon from "./Icons/MenuCloseIcon";
import HeartIcon from "./Icons/HeartIcon";
import FinanceIcon from "./Icons/FinanceIcon";
import WellBeingIcon from "./Icons/WellBeingIcon";
import EntertainmentIcon from "./Icons/EntertainmentIcon";

const MainNav = () => {
  const [mobileNavIsVisible, setMobileNavIsVisible] = useState(false);

  const openMobileNavHandler = () => {
    setMobileNavIsVisible(true);
  };

  const closeMobileNavHandler = () => {
    setMobileNavIsVisible(false);
  };

  return (
    <header className={classes.header}>
      <nav className={classes.nav}>
        <Link href="/">
          <div className={classes.brand_container}>
            <Brand fill="currentColor" width="44" />
            <h2 className={classes.brand}>Gadgets</h2>
          </div>
        </Link>
        <ul className={classes.links}>
          <li>
            <Link href="/health">Health</Link>
          </li>
          <li>
            <Link href="/finance">Finance</Link>
          </li>
          <li>
            <Link href="/wellbeing">Well-being</Link>
          </li>
          <li>
            <Link href="/entertainment">Entertainmant</Link>
          </li>
        </ul>
        <div className={classes.actions}>
          <Link href="/login">Login</Link>
        </div>
      </nav>
      <CSSTransition
        in={!mobileNavIsVisible}
        mountOnEnter
        unmountOnExit
        timeout={300}
        classNames="placeholdernav"
      >
        <nav className={classes.placeholder_nav}>
          <Link href="/">
            <div className={classes.placeholder_nav_brand}>
              <div>
                <Brand fill="#fff" width="34" />
                <h2 className={classes.brand}>Gadgets</h2>
              </div>
            </div>
          </Link>
          <div
            className={classes.placeholder_nav_menu_icon}
            onClick={openMobileNavHandler}
          >
            <MenuIcon fill="#fff" width="30" />
          </div>
        </nav>
      </CSSTransition>
      <CSSTransition
        in={mobileNavIsVisible}
        mountOnEnter
        unmountOnExit
        timeout={600}
        classNames="mobnav"
      >
        <nav className={classes.mobile_nav}>
          <Link href="/">
            <div
              className={classes.mobile_nav_brand}
              onClick={closeMobileNavHandler}
            >
              <div className={classes.mobile_nav_brand_link}>
                <Brand fill="#fff" width="35" />
                <h4 className={classes.brand}>Gadgets</h4>
              </div>
            </div>
          </Link>
          <ul className={classes.mobile_nav_links}>
            <li onClick={closeMobileNavHandler}>
              <Link href="/health">
                <div className={classes.mobile_nav_icon_container}>
                  <HeartIcon fill="#fff" width="32" />
                  <p>Health</p>
                </div>
              </Link>
            </li>
            <li onClick={closeMobileNavHandler}>
              <Link href="/finance">
                <div className={classes.mobile_nav_icon_container}>
                  <FinanceIcon fill="#fff" width="34" />
                  <p>Finance</p>
                </div>
              </Link>
            </li>
            <li onClick={closeMobileNavHandler}>
              <Link href="/wellbeing">
                <div className={classes.mobile_nav_icon_container}>
                  <WellBeingIcon fill="#fff" width="34" />
                  <p>Well-being</p>
                </div>
              </Link>
            </li>
            <li onClick={closeMobileNavHandler}>
              <Link href="/entertainment">
                <div className={classes.mobile_nav_icon_container}>
                  <EntertainmentIcon fill="#fff" width="29" />
                  <p>Entertainmant</p>
                </div>
              </Link>
            </li>
          </ul>
          <div
            className={classes.mobile_nav_brand}
            onClick={closeMobileNavHandler}
          >
            <div className={classes.mobile_nav_icon_container}>
              <MenuCLoseIcon fill="#fff" width="32" />
              <p>Close</p>
            </div>
          </div>
        </nav>
      </CSSTransition>
    </header>
  );
};

export default MainNav;
