import clsx from "clsx";
import style from "./portfolioHome.module.scss";
import Image from "next/image";
import { Box, Typography } from "@mui/material";

export function PortfolioHome() {
  return (
    <section className={style.portfolioHome}>
      <div className={clsx(style.backShape, style.backShapeWhite)}></div>
      <div className={clsx(style.backShape, style.backShapeBlack)}></div>
      <div className={style.homeContainer}>
        <div className={style.homeTexts}>
          <div className={style.homeTextsContainer}>
            <Typography variant="h3" component="h1">
              <span className={style.homeTextOne}>Hi, I'm Hector</span>
              <span className={style.homeTextTwo}>Front-end developer.</span>
            </Typography>
          </div>
        </div>
        <div>
          <div className={style.photo}>
            <Image
              src="/assets/photo.png"
              alt="Photo"
              width={100}
              height={100}
              layout="responsive"
            ></Image>
          </div>
        </div>
      </div>
    </section>
  );
}
