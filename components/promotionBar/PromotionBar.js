import { useState } from "react";
import styles from "./PromotionBar.module.css";

const PromotionBar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isHidden, setIsHidden] = useState(false);

  const closePromoBar = () => {
    setIsHidden(true);
    setTimeout(() => setIsVisible(false), 800);
  };

  return (
    isVisible && (
      <div className={`${styles.promoBar} ${isHidden ? styles.hide : ""}`}>
        <span>
          10% de desconto na primeira compra!{" "}
          <a href="#produtos">Veja nossos produtos</a>
        </span>
        <button className={styles.closeBtn} onClick={closePromoBar}>
          ×
        </button>
      </div>
    )
  );
};

export default PromotionBar;
