import React, { useState } from "react";
import styles from "../styles/ProductList.module.scss";
import { useLocation } from 'react-router-dom'

//COMPONENTS
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";


const ProductList = () => {

  const location = useLocation()
  const cat = location.pathname.split("/")[2]
  const [filters, setFilters] = useState({})
  const [sort, setSort] = useState("newest")

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name] : value
    })
  }



  return (
    <div className={styles.container}>
      <Navbar />
      <h1 className={styles.title}>{cat}</h1>
      <div className={styles.filterContainer}>
        <div className={styles.filter}>
          <span className={styles.filterText}>Filter Products</span>
          <select name="color" onChange={handleFilters}>
            <option disabled >
              Color
            </option>
            <option>white</option>
            <option>black</option>
            <option>red</option>
            <option>blue</option>
            <option>yellow</option>
            <option>green</option>
          </select>
          <select name="size" onChange={handleFilters}>
            <option disabled >
              Size
            </option>
            <option>XS</option>
            <option>S</option>
            <option>M</option>
            <option>L</option>
            <option>XL</option>
          </select>
        </div>
        <div className={styles.filter}>
          <span className={styles.filterText}>Sort Products</span>
          <select onChange={(e)=>setSort(e.target.value)}>
            <option value="newest" >Newest</option>
            <option value="asc">Price (asc)</option>
            <option value="desc">Price (desc)</option>
          </select>
        </div>
      </div>
      <Products cat={cat} filters={filters} sort={sort} />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default ProductList;
