import React from "react";
import styles from "./styles.module.scss";
import Product from "../Product";
import { useState, useEffect } from "react";
import axios from "axios";

const Products = ({ cat, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    axios
      .get(
        cat
          ? `http://localhost:5000/api/products?category=${cat}`
          : "http://localhost:5000/api/products"
      )
      .then((res) => {
        const data = res?.data;
        setProducts(data);
      });
  }, [cat]);

  useEffect(() => {
    cat &&
    setFilteredProducts(
      products?.filter(item =>
        Object.entries(filters).every(([key, value]) =>
          item[key].includes(value)
        )
      )
    );
  }, [products, cat, filters]);

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev]?.sort((a, b) => a?.createdAt - b?.createdAt)
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev]?.sort((a, b) => a?.price - b?.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev]?.sort((a, b) => b?.price - a?.price)
      );
    }
  }, [sort]);

  return (
    <div className={styles.container}>
      {cat
        ? filteredProducts?.map((item) => {
            return <Product key={item?._id} item={item} />;
          })
        : products.slice(0, 8)?.map((item) => {
            return <Product key={item?._id} item={item} />;
          })}
    </div>
  );
};

export default Products;
