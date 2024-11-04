import styles from "./index.module.css";
import PromotionBar from "../components/promotionBar/PromotionBar.js";
function home() {
  return (
    <div className={styles.mainContainer}>
      <PromotionBar />
    </div>
  );
}
export default home;
