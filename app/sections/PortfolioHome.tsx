import style from "./portfolioHome.module.scss";
import { CyberFrame } from "@/stories/components/CyberFrame/CyberFrame";
import { CyberTitle } from "@/stories/components/CyberTitle/CyberTitle";

export function PortfolioHome() {
  return (
    <section className={style.portfolioHome}>
      <div className={style.portfolioHomeSection}>
        <CyberFrame>
          <div>
            <CyberTitle title="Hi, my name is" titleTwo="Hector Camacho" />
            <div className={style.portfolioHomeText}>
              I am a front-end developer and web designer with 11 years of
              experience creating websites and web applications.
            </div>
          </div>
        </CyberFrame>
      </div>
    </section>
  );
}
