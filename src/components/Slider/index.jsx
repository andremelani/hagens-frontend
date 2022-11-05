import React from "react";
import styles from "./styles.module.scss";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { slideImages } from "../../data/slideData";



const properties = {
  prevArrow: (
    <button className={styles.arrow}>
      
    </button>
  ),
  nextArrow: (
    <button className={styles.arrow}>
      
    </button>
  ),
};

const Slider = () => {
  return (
    <div className={styles.container}>
      <Slide {...properties}>
        {slideImages.map((item) => (
          <div style={{ display: "flex" }} key={item.id}>
            <div className={styles.images}>
              <img src={item.url} alt="" />
            </div>
            <div className={styles.infoContainer}>
              <h1 className={styles.title}>{item.title}</h1>
              <p className={styles.description}>
                {item.description}
              </p>
              <button className={styles.more} style={{'backgroundColor': `${item.color}`}}>SEE MORE</button>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default Slider;
