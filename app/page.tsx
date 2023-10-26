import styles from "./page.module.scss";
import { PortfolioHome } from "./sections/PortfolioHome";
import { Roboto } from "next/font/google";
import "./page.module.scss"

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className={roboto.className}>
      <div className={styles.main}>
        <PortfolioHome />
      </div>
    </main>
  );
}
