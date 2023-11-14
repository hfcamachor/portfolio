"use client";

import style from "./portfolioAbout.module.scss";
import { PhotoShape } from "@/stories/molecules/PhotoShape/PhotoShape";
import { CyberInfoFrame } from "@/stories/molecules/CyberInfoFrame/CyberInfoFrame";

export function PortfolioAbout() {
  return (
    <section className={style.portfolioAbout}>
      <div className={style.portfolioAboutSection}>
        <PhotoShape photoImage="/photos/photo-s.png" alt="Photo" />
      </div>
      <div className={style.portfolioAboutSection}>
        <CyberInfoFrame
          title="About me"
          subtitle="Who is Hector"
          buttonLabel="Create another response"
        />
      </div>
    </section>
  );
}
