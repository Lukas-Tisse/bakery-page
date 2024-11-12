import styles from "./Header.module.css";
import Image from "next/image";
import imageLogo from "../../public/imageLogo.png";
import OpenMenuButton from "./OptionsButton/OpenMenuButton";
function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.headerLeft}>
        <Image src={imageLogo} className={styles.imageLogo} />
        <div className={styles.buttonOptions}>
          <a>PRODUCTS</a>
          <a>ORDERS</a>
          <a>BAKERIES</a>
          <a>ABOUT</a>
        </div>
        <OpenMenuButton />
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
