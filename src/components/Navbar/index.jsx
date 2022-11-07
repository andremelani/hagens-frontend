import React from "react";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";
import Badge from "@mui/material/Badge";
import {ShoppingCartOutlined} from "@mui/icons-material";
import { useSelector } from "react-redux";

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.left}></div>
        <div className={styles.center}>
          <h1 className={styles.logo}>HAGENS.</h1>
        </div>
        <div className={styles.right}>
          <div className={styles.menuItem}>

            <Link to="/register" >REGISTER</Link>
          </div>
          <div className={styles.menuItem}>
          <Link to="/login" preventScrollReset={true}>LOGIN</Link>
          </div>
          <Link to="/cart">
            <div className={styles.menuItem}>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
