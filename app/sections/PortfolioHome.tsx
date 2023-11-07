import style from "./portfolioHome.module.scss";
import { PhotoShape } from "@/stories/components/PhotoShape/PhotoShape";
import FontComponent from "@/stories/components/FontComponent/FontComponent";
import clsx from "clsx";
import { TextBox } from "@/stories/components/TextBox/TextBox";

export function PortfolioHome() {
  return (
    <section className={style.portfolioHome}>
      <div className={style.portfolioHomeSection}>
        <PhotoShape photoImage="/photos/photo.png" alt="" />
      </div>
      <div
        className={clsx(
          style.portfolioHomeSection,
          style.portfolioHomeSectionTwo
        )}
      >
        <div className={style.portfolioHomeTitleContainer}>
          <FontComponent fontName="orbitron">
            <h1 className={style.portfolioHomeTitle}>
              Hi, my name is
              <span className={style.portfolioHomeTitleName}>
                Hector Camacho
              </span>
            </h1>
          </FontComponent>
          <TextBox className={style.portfolioHomeTextBox}>
            I am a front-end developer and web designer with 11 years of
            experience creating websites and web applications.
          </TextBox>
        </div>
      </div>
    </section>
  );
}
