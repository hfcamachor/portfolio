"use client";

import style from "./portfolioHome.module.scss";
import { CyberFrame } from "@/stories/atoms/CyberFrame/CyberFrame";
import { motion } from "framer-motion";

export function PortfolioHome() {
  return (
    <section className={style.portfolioHome}>
      <div className={style.portfolioHomeSection}>
        <div
          className={style.portfolioHomeIntro}
        >
          <h1 className={style.portfolioHomeTitle}>
            Hi, i am{" "}
            <span className={style.portfolioHomeHighlight}>Hector</span>
            <div>
              A{" "}
              <span className={style.portfolioHomeHighlight}>
                Front-end developer
              </span>
            </div>
          </h1>
          <div className={style.portfolioHomeText}>
            <p>
              I have 10 years of experience creating websites and web
              applications.
            </p>
          </div>
        </div>
      </div>
      <div className={style.portfolioHomeSection}>
        <CyberFrame image="/assets/home-image-one.png" color="yellow" />
      </div>
    </section>
  );
}
