import React from "react";
import "../../App.css";
import Button from "../library/Button";
import style from "./header.module.scss";
const Header = () => {
  return (
    <header className={style.header}>
      <div className="container">
        <nav className={style.nav}>
          <img className={style.header__logo} alt="logo" />
          <div className={style.header__wrapper}>
            <ul className={style.header__list}>
              <li className={style.header__item}>Home</li>
              <li className={style.header__item}>About us</li>
              <li className={style.header__item}>Features</li>
              <li className={style.header__item}>Pricing</li>
              <li className={style.header__item}>FAQ</li>
              <li className={style.header__item}>Blog</li>
            </ul>
            <Button className={style.btn}>contact us</Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
