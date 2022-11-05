import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "../styles/Cart.module.scss";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useSelector } from "react-redux";

function Cart() {
  const cart = useSelector((state) => state.cart);
  
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.wrapper}>
        <h1>YOUR BAG</h1>
        <div className={styles.top}>
          <button>CONTINUE SHOPPING</button>
          <div className={styles.topTexts}>
            <span>SHopping Bag (2)</span>
            <span>Your Wishlist (0)</span>
          </div>
          <button>CHECKOUT NOW</button>
        </div>
        <div className={styles.bottom}>
          <div className={styles.info}>
            {cart.products?.map((product) => (
              <div className={styles.product} key={product._id}>
                <div className={styles.productDetail}>
                  <img src={product?.img} alt="" />
                  <div className={styles.details}>
                    <span className={styles.productName}>
                      <b>Product: </b>{product?.title}
                    </span>
                    <span className={styles.productId}>
                      <b>ID: </b>{product?._id}
                    </span>
                    <div className={styles.productColor} style={{"backgroundColor" : `${product?.color}`}} />
                    <span className={styles.productSize}>
                      <b>Size: </b>{product?.size}
                    </span>
                  </div>
                </div>
                <div className={styles.priceDetail}>
                  <div className={styles.productAmountContainer}>
                    <RemoveIcon />
                    <span>{product.quantity}</span>
                    <AddIcon />
                  </div>
                  <div className={styles.productPrice}>R$ {product.price * product.quantity}</div>
                </div>
              </div>
            ))}
            <hr></hr>
          </div>
          <div className={styles.summary}>
            <h1>ORDER SUMMARY</h1>
            <div className={styles.summaryItem}>
              <span>Subtotal</span>
              <span>R$ {cart.total}</span>
            </div>
            <div className={styles.summaryItem}>
              <span>Estimated Shipping</span>
              <span>R$ 0</span>
            </div>
            <div className={styles.summaryItem}>
              <span>Shipping Discount</span>
              <span>R$ 0</span>
            </div>
            <div className={styles.summaryItem}>
              <span>
                <b>Total</b>
              </span>
              <span>
                <b>R$ {cart.total}</b>
              </span>
            </div>
            <button>CHECKOUT NOW</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Cart;
