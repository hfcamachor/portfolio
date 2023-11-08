import styles from "./page.module.scss";
import { PortfolioHome } from "./sections/PortfolioHome";
import "./page.module.scss"

export default function Home() {
  return (
    <main>
      <div className={styles.main}>
        <PortfolioHome />
      </div>
    </main>
  );
}
