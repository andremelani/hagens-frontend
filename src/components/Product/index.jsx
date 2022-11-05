import React from "react";
import styles from "./styles.module.scss";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { Link } from "react-router-dom";

const Product = ({ item }) => {
  return (
    <div className={styles.container}>
      <div className={styles.circle}></div>
      <img src={item.img} alt="" />
      <div className={styles.info}>
        <div className={styles.icon}>
          <Link to={`/product/${item._id}`}>
            <ShoppingCartOutlinedIcon />
          </Link>
        </div>
        <div className={styles.icon}>
          <Link to={`/product/${item._id}`}>
            <SearchOutlinedIcon />
          </Link>
        </div>
        <div className={styles.icon}>
          <Link to={`/product/${item._id}`}>
            <FavoriteBorderOutlinedIcon />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
