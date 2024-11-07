import styles from "./Header.module.css";
import Image from "next/image";
import imageLogo from "../../public/imageLogo.png";
function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.headerLeft}>
        <Image src={imageLogo} className={styles.imageLogo} />
        <div className={styles.buttonsLeft}>
          <div className={styles.products}>PRODUCTS</div>
          <div className={styles.orders}>ORDERS</div>
          <div className={styles.bakeries}>BAKERIES</div>
          <div className={styles.about}>ABOUT</div>
        </div>
      </div>
      <div className={styles.headerRight}>
        <button className={styles.userButton}>
          <i class="bi bi-person-circle"></i>
        </button>
      </div>
    </div>
  );
}
export default Header;
