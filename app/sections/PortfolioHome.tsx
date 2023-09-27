import clsx from "clsx";
import style from "./portfolioHome.module.scss";
import Image from "next/image";
import { Typography } from "@mui/material";
import { TextBackgroundShape } from "@/stories/components/TextBackgroundShape/TextBackgroundShape";

export function PortfolioHome() {
  return (
    <section className={style.portfolioHome}>
      <div className={clsx(style.backShape, style.backShapeWhite)}></div>
      <div className={clsx(style.backShape, style.backShapeBlack)}></div>

      <div className={style.homeContainer}>
        <div className={style.photoSection}>
          <div className={style.photo}>
            <Image
              src="/assets/photo.png"
              alt="Photo"
              width={100}
              height={100}
              layout="responsive"
            ></Image>
          </div>
          <div className={style.homeTexts}>
            <div className={style.titleNameContainer}>
              <TextBackgroundShape
                className={style.titleName}
                label="Hi, I'm Héctor"
                variant="subtitle1"
                shapeReverted
                type="red"
              />
            </div>
            <TextBackgroundShape
              className={style.title}
              label="Front-end developer"
              variant="h1"
              type="white"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
