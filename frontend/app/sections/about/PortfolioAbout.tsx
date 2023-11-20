"use client";

import style from "./portfolioAbout.module.scss";
import Image from "next/image";
import clsx from "clsx";
import { PhotoShape } from "@/stories/molecules/PhotoShape/PhotoShape";
import { CyberButton } from "@/stories/atoms/CyberButton/CyberButton";
import { useState } from "react";
import { Loader } from "@/stories/atoms/Loader/Loader";

export function PortfolioAbout() {
  const [aiDescription, setAiDescription] = useState("");
  const [loading, setLoading] = useState(false);

  function generateRandomNumber(rangeSize: number, minValue: number) {
    const randomDecimal = Math.random();

    const randomNumber = Math.floor(randomDecimal * rangeSize) + minValue;

    return randomNumber;
  }

  const getAiDescription = async () => {
    setLoading(true);
    const rangeSize = 120 - 70 + 1;
    const minValue = 50;

    const apiUrl = "http://localhost:8000/completions";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: `Write me description, do it as an interesting Ai is talking about me and describing me as a good front end in no more than ${generateRandomNumber(
          rangeSize,
          minValue
        )} words, start with something like, "Meet Hector", "Hector is", "let me introduce" or something like that,  use this description to create it: "my name is HectorFront-end developer and web designer with a passion for building accessible, intuitive, and visually appealing web experiences. Hybrid profile brings a unique blend of technical proficiency and creative vision to every project. Proven ability to develop and maintain high-quality web applications using a variety of technologies, including React, Vue, Angular, TypeScript, Storybook, Cypress, Next js, Vite, and Google Cloud Platform. Expertise in user interface (UI/UX) design, wireframing and prototyping with Figma, motion design, and interactive animation". keep almos the same lenght`,
      }),
    };

    try {
      const response = await fetch(apiUrl, options);
      const data = await response.json();
      setAiDescription(data.choices[0].message.content);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

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
            <div className={style.responseSectionLoader}>
              {loading && <Loader />}
            </div>
            <div className={style.responseSectionText}>
              <div className={style.responseSectionAiBotContainer}>
                {aiDescription && !loading && (
                  <div className={style.responseSectionAiBot}>
                    <div className={style.responseSectionAiBotImage}>
                      <Image
                        src={`/aibots/aibot-${generateRandomNumber(
                          10,
                          1
                        )}.jpeg`}
                        fill
                        alt="Ai bot"
                      />
                    </div>
                  </div>
                )}
              </div>
              <div>
                {!aiDescription && !loading && (
                  <p>
                    Front-end developer and web designer with a passion for
                    building accessible, intuitive, and visually appealing web
                    experiences.
                    <br />
                    <br />
                    <span className={style.responseSectionTextHighlight}>
                      Click below to discover what AI has to share about my
                      journey
                    </span>
                  </p>
                )}
                <p>{!loading && aiDescription}</p>
              </div>
            </div>
            <div className={style.responseSectionButton}>
              <div className={style.responseSectionButtonBot}>
                <CyberButton
                  onClick={getAiDescription}
                  label="Let AI Describe Me"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
