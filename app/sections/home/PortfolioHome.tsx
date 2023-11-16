"use client";

import style from "./portfolioHome.module.scss";
import { CyberFrame } from "@/stories/atoms/CyberFrame/CyberFrame";
import { CyberTitle } from "@/stories/atoms/CyberTitle/CyberTitle";
import { motion } from "framer-motion";

export function PortfolioHome() {
  return (
    <section className={style.portfolioHome}>
      <div className={style.portfolioHomeBackground}></div>
      <div className={style.portfolioHomeSection}>
        <CyberFrame>
          <div>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 1,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              <CyberTitle title="Hi, my name is" titleTwo="Hector Camacho" level={1} />
            </motion.div>
            <motion.div
              className={style.portfolioHomeText}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 0.3,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              I am a{" "}
              <span className={style.portfolioHomeHighlight}>
                front-end developer
              </span>{" "}
              with 11 years of experience creating websites and web
              applications.
            </motion.div>
          </div>
        </CyberFrame>
      </div>
    </section>
  );
}
