import styles from "./page.module.scss";
import { PortfolioHome } from "./sections/PortfolioHome";
import "./page.module.scss"
import FontComponent from "@/stories/components/FontComponent/FontComponent";

export default function Home() {
  return (
    <main>
      <FontComponent className={styles.main} fontName="roboto">
        <PortfolioHome />
      </FontComponent>
    </main>
  );
}
