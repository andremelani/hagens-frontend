import React from "react";
import styles from "./styles.module.scss";

//ICONS
import {
  Facebook,
  Instagram,
  LinkedIn,
  Twitter,
  LocationOn,
  LocalPhone,
  EmailOutlined
} from "@mui/icons-material";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h1 className={styles.logo}>HAGENS.</h1>
        <p className={styles.description}>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to usin
        </p>
        <div className={styles.socialContainer}>
          <Link to="/">
            <div className={styles.socialIcon}>
              <Facebook />
            </div>
          </Link>

          <Link to="/">
            <div className={styles.socialIcon}>
              <Instagram />
            </div>
          </Link>
          <Link to="/">
            <div className={styles.socialIcon}>
              <LinkedIn />
            </div>
          </Link>
          <Link to="/">
            <div className={styles.socialIcon}>
              <Twitter />
            </div>
          </Link>
        </div>
      </div>
      <div className={styles.center}>
        <h3> Useful Links</h3>
        <ul className={styles.list}>
          <li className={styles.listItem}>Home</li>
          <li className={styles.listItem}>Cart</li>
          <li className={styles.listItem}>Man Fashion</li>
          <li className={styles.listItem}>Woman Fashion</li>
          <li className={styles.listItem}>Accessories</li>
          <li className={styles.listItem}>My Account</li>
          <li className={styles.listItem}>Order Tracking</li>
          <li className={styles.listItem}>Wishlist</li>
          <li className={styles.listItem}>Terms</li>
        </ul>
      </div>
      <div className={styles.right}>
        <h3>Contact</h3>
        <p className={styles.contactItem}>
          <LocationOn style={{ marginRight: "10px" }} />
          Av. Silva Jardim, 2014 - Curitiba, PR
        </p>
        <p className={styles.contactItem}>
          <LocalPhone style={{ marginRight: "10px" }} />
          (11) 94106-6927
        </p>
        <p className={styles.contactItem}>
          <EmailOutlined style={{ marginRight: "10px" }} />
          andre.lopes.melani@gmail.com
        </p>
        <img src="https://i.ibb.co/ccbfNQx/payment.png" alt="" />
      </div>
    </div>
  );
};

export default Footer;
