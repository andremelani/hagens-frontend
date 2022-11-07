import React from "react";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";
//ICONS
import {
  ShoppingCartOutlined,
  SearchOutlined,
  FavoriteBorderOutlined,
} from "@mui/icons-material";



const Product = ({ item }) => {
  return (
    <div className={styles.container}>
      <div className={styles.circle}></div>
      <img src={item.img} alt="" />
      <div className={styles.info}>
        <div className={styles.icon}>
          <Link to={`/product/${item._id}`}>
            <ShoppingCartOutlined />
          </Link>
        </div>
        <div className={styles.icon}>
          <Link to={`/product/${item._id}`}>
            <SearchOutlined />
          </Link>
        </div>
        <div className={styles.icon}>
          <Link to={`/product/${item._id}`}>
            <FavoriteBorderOutlined />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
