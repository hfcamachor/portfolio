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
            buttonLabel="Let AI Describe Me!"
            responseTitle="Ai response"
            responseText="Front-end developer and web designer with a passion for building accessible, intuitive, and visually appealing web experiences. Hybrid profile brings a unique blend of technical proficiency and creative vision to every project. Proven ability to develop and maintain high-quality web applications using a variety of technologies, including React, Vue, Angular, TypeScript, Storybook, Cypress, Next js, Vite, and Google Cloud Platform. Expertise in user interface (UI/UX) design, wireframing and prototyping with Figma, motion design, and interactive animation."
          />
        </div>
      </div>
    </section>
  );
}
