import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.header}>
      <button className={styles.searchButton}>
        <i class="bi bi-search"></i>
      </button>
    </div>
  );
}
export default Header;
