import styles from "./Header.module.css";
import Image from "next/image";
import imageLogo from "../../public/imageLogo.png";
function Header() {
  return (
    <div className={styles.header}>
      <div>
        <Image src={imageLogo} className={styles.imageLogo} />
      </div>
      <button className={styles.userButton}>
        <i class="bi bi-person-circle"></i>
      </button>
    </div>
  );
}
export default Header;
