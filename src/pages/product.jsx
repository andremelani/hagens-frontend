import React, { useEffect, useState } from "react";
import styles from "../styles/Product.module.scss";
import { useLocation } from "react-router-dom";
import { addProduct } from "../redux/cartRedux";
import { useDispatch } from "react-redux";
import axios from "axios";

//COMPONENTS
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import { Add, Remove } from "@mui/icons-material";

const Product = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("https://api-hagens2.herokuapp.com/api/products/find/" + id)
      .then((res) => {
        setProduct(res.data);
      });
  }, [id]);

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  const handleClick = () => {
    dispatch(addProduct({ ...product, quantity, color, size }));
  };

  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.wrapper}>
        <div className={styles.imageContainer}>
          <img src={product?.img} alt="" />
        </div>
        <div className={styles.infoContainer}>
          <h1>{product?.title}</h1>
          <p>{product?.description}</p>
          <span>R$20,00</span>
          <div className={styles.filterContainer}>
            <div className={styles.filter}>
              <h3 className={styles.filterTitle}>Color</h3>
              {product.color?.map((c) => (
                <div
                  key={c}
                  className={styles.filterColor}
                  style={{ backgroundColor: `${c}` }}
                  onClick={() => setColor(c)}
                ></div>
              ))}
            </div>
            <div className={styles.filter}>
              <h3 className={styles.filterTitle}>Size</h3>
              <select
                className={styles.filterSize}
                onChange={(e) => setColor(e.target.value)}
              >
                {product.size?.map((s) => (
                  <option>{s}</option>
                ))}
              </select>
            </div>
          </div>
          <div className={styles.addContainer}>
            <div className={styles.amountContainer}>
              <Remove onClick={() => handleQuantity("dec")} />
              <span className={styles.amount}>{quantity}</span>
              <Add onClick={() => handleQuantity("inc")} />
            </div>
            <button onClick={handleClick}>ADD TO CART</button>
          </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Product;
