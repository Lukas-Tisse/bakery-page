import styles from "./index.module.css";
import PromotionBar from "../components/PromotionBar/PromotionBar.js";
import Header from "../components/Header/Header.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
function home() {
  return (
    <div className={styles.mainContainer}>
      <PromotionBar />
      <Header />
    </div>
  );
}
export default home;
