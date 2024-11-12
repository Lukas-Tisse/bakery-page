import { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import styles from "./OpenMenuButton.module.css";

export default function OpenMenuButton() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOverlay = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button className={styles.menuButton} onClick={toggleOverlay}>
        {isOpen ? <i class="fas fa-times"></i> : <i class="fas fa-bars"></i>}
      </button>
      <div
        className={`${styles.overlay} ${isOpen ? styles.overlayVisible : ""}`}
      >
        <div className={styles.optionsContainer}>
          <a onClick={toggleOverlay}>PRODUCTS</a>
          <a onClick={toggleOverlay}>ORDERS</a>
          <a onClick={toggleOverlay}>BAKERIES</a>
          <a onClick={toggleOverlay}>ABOUT</a>
        </div>
      </div>
    </div>
  );
}
