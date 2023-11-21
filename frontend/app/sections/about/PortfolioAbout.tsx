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
    const rangeSize = 120 - 40 + 1;
    const minValue = 40;
    const numberOfWords = generateRandomNumber(rangeSize, minValue);
    console.log(numberOfWords);
    const apiUrl = "http://localhost:8000/completions";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: `First choose a famous character of films, videogames, or series.

        Later on talking like that character make a description about me Hector, saying that i am a good front end in no more than ${numberOfWords} words, start with something like, "Meet Hector", "Hector is", "let me introduce" or something like that, use this to create it: "
        
                Technical Skills
                ● Programming Languages: HTML, CSS, JavaScript, TypeScript, ES6
                ● Front-end Frameworks: React, Vue.js, Angular, Next.js
                ● State Management: Redux
                ● Testing: Cypress, Unit Testing (Jasmine, Jest)
                ● Build Tools: Webpack
                ● Back-end Technologies: Node.js, Express.js
                ● UI Libraries: Material UI
                ● Prototyping: Figma, Illustrator
                ● Animation: CSS, LottieFiles,
                ● Other: Web Performance Optimization, Accessibility, Version Control (Git), Python,
                Google Cloud Platform
                Design Skills
                ● UI/UX Design: User interface and user experience design
                ● Prototyping: Wireframing and prototyping with Figma
                ● Motion Design: Interactive animation
                Soft Skills
                ● Problem Solving
                ● Attention to Detail
                ● Flexibility and Adaptability
                ● Fast and Continuous Learning
                ● Self-Motivated
                
                ". keep almos the same length`,
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
