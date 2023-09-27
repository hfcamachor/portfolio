import clsx from "clsx";
import style from "./portfolioHome.module.scss";
import Image from "next/image";
import { TextBackgroundShape } from "@/stories/components/TextBackgroundShape/TextBackgroundShape";
import { ShapeParagraph } from "@/stories/components/ShapeParagraph/ShapeParagraph";
import { Typography } from "@mui/material";

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
                type="white"
              />
            </div>
            <TextBackgroundShape
              className={style.title}
              label="Front-end developer"
              variant="h1"
              type="red"
            />
          </div>
        </div>
        <div className={style.textBoxSection}>
          <ShapeParagraph>
            <Typography className={style.textBox}>
              I’m a front-end developer and web designer with a passion for
              building accessible, intuitive and visually appealing web
              experiences. With my hybrid profile I can bring a unique blend of
              technical proficiency and creative vision to every project. When
              I'm not coding, I'm often exploring my interest in animation and
              games.
            </Typography>
          </ShapeParagraph>
        </div>
      </div>
    </section>
  );
}
