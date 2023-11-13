"use client";

import style from "./portfolioAbout.module.scss";
import { CyberFrame } from "@/stories/atoms/CyberFrame/CyberFrame";
import { CyberTitle } from "@/stories/molecules/CyberTitle/CyberTitle";
import { motion } from "framer-motion";

import { PhotoFrame } from "@/stories/atoms/PhotoFrame/PhotoFrame";
import { PhotoShape } from "@/stories/molecules/PhotoShape/PhotoShape";

export function PortfolioAbout() {
  return (
    <section className={style.portfolioAbout}>
      <div className={style.portfolioAboutSection}>
        <PhotoShape photoImage="/photos/photo-s.png" alt="Photo" />
      </div>
      <div className={style.portfolioAboutSection}>
        <PhotoShape photoImage="/photos/photo-s.png" alt="Photo" />
      </div>
    </section>
  );
}
