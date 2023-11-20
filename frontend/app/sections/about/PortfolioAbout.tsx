"use client";

import style from "./portfolioAbout.module.scss";
import { CyberInfoFrame } from "@/stories/molecules/CyberInfoFrame/CyberInfoFrame";
import Image from "next/image";
import clsx from "clsx";
import { PhotoShape } from "@/stories/molecules/PhotoShape/PhotoShape";
import { CyberButton } from "@/stories/atoms/CyberButton/CyberButton";

export function PortfolioAbout() {
  return (
    <section className={style.portfolioAbout}>
      <div className={style.portfolioAboutSectionLeftBack}></div>
      <div className={style.portfolioAboutSectionContainer}>
        <div
          className={clsx(
            style.portfolioAboutSection,
            style.portfolioAboutSectionLeft
          )}
        >
          <div className={style.portfolioAboutPhoto}>
            <h2 className={style.portfolioAboutPhotoText}>About me</h2>
            <PhotoShape photoImage="/photos/photo-s.png" alt="Photo" />
          </div>
        </div>
        <div
          className={clsx(
            style.portfolioAboutSection,
            style.portfolioAboutSectionRight
          )}
        >
          <div className={style.responseSection}>
            <div className={style.responseSectionAiBotContainer}>
              <div className={style.responseSectionAiBot}>
                <Image
                  src={"/assets/aibot.jpeg"}
                  fill
                  alt="Ai bot"
                />
              </div>
            </div>
            <div className={style.responseSectionText}>
              <p>
                Front-end developer and web designer with a passion for building
                accessible, intuitive, and visually appealing web experiences.
                <br /><br />
                <span className={style.responseSectionTextHighlight}>
                  Click below to discover what AI has to share about my journey
                </span>
              </p>
            </div>
            <div className={style.responseSectionButton}>
              <CyberButton label="Let AI Describe Me" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
