import React from "react";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";

const CategoryItem = ({ item }) => {
  return (
    <div className={styles.container}>
      <Link to={`/products/${item.category}`} />
      <img src={item.url} alt="" />
      <div className={styles.info}>
        <h1 className={styles.title}>{item.title}</h1>

        <Link to={`/products/${item.category}`} >
          <button className={styles.shopNow}>SHOP NOW</button>
        </Link>
      </div>
    </div>
  );
};

export default CategoryItem;
