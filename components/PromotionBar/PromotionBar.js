import styles from "./PromotionBar.module.css";

function PromotionBar() {
  return (
    <div className={styles.promoBar}>
      <span className={styles.textContainer}>
        10% de desconto na primeira compra!{" "}
        <a href="#produtos">Veja nossos produtos</a>
      </span>
    </div>
  );
}

export default PromotionBar;
