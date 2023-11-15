"use client";

import style from "./portfolioAbout.module.scss";
import { CyberInfoFrame } from "@/stories/molecules/CyberInfoFrame/CyberInfoFrame";
import Image from "next/image";
import clsx from "clsx";

export function PortfolioAbout() {
  return (
    <section className={style.portfolioAbout}>
      <div className={style.portfolioAboutSectionContainer}>
        <div
          className={clsx(
            style.portfolioAboutSection,
            style.portfolioAboutSectionLeft
          )}
        >
          <div className={style.portfolioAboutPhotoContainer}>
            <div className={style.portfolioAboutPhoto}>
              <Image
                fill
                src={"/photos/photo.jpg"}
                alt={"Photo"}
                objectFit="cover"
              />
            </div>
          </div>
        </div>
        <div
          className={clsx(
            style.portfolioAboutSection,
            style.portfolioAboutSectionRight
          )}
        >
          <CyberInfoFrame
            title="About me"
            subtitle="Who is Hector"
            buttonLabel="Create another response"
          />
        </div>
      </div>
    </section>
  );
}
