import styles from "./page.module.scss";
import { PortfolioHome } from "./sections/home/PortfolioHome";
import { PortfolioAbout } from "./sections/about/PortfolioAbout";
import "./page.module.scss"

export default function Home() {
  return (
    <main>
      <div className={styles.main}>
        <PortfolioHome />
        <PortfolioAbout />
      </div>
    </main>
  );
}
