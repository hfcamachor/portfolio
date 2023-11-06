import style from "./portfolioHome.module.scss";
import { PhotoShape } from "@/stories/components/PhotoShape/PhotoShape";

export function PortfolioHome() {
  return (
    <section className={style.portfolioHome}>
      <div className={style.portfolioHomeSection}>
        <PhotoShape />
      </div>
    </section>
  );
}
