"use client";

import clsx from "clsx";
import styles from "./cyberFrame.module.scss";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export interface CyberFrameProps {
  /**
   * Custom Class
   */
  className?: string;
  /**
   * Color of the frame
   */
  color?: "blue" | "red" | "yellow";
  /**
   * Url of the image
   */
  image: string;
  /**
   * Alt of the image
   */
  alt?: string;
}

export function CyberFrame({
  className,
  color = "red",
  image,
  alt,
}: CyberFrameProps) {
  return (
    <div
      className={clsx(
        className,
        styles.cyberFrame,
        styles[`cyberFrame${color}`]
      )}
    >
      <motion.div
        className={styles.cyberFrameImage}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          delay: 0,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <Image fill src={image} alt={alt || ""} />
      </motion.div>
      <motion.svg
        width="100%"
        height="100%"
        viewBox="0 0 739 497"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.cyberFrameSvg}
      >
        <motion.path
          d="M43.5 110.884V360.072L15 389.325V453.789L56 489H297L320.5 453.789H446L466 489H737V37.2113H563L527 2H15V85.9655L43.5 110.884Z"
          stroke="#F7D527"
          strokeWidth="3"
          className={styles.cyberFrameMain}
        />
        <motion.path
          className={styles.cyberFrameBorders}
          d="M30 352L0 386L-1.24577e-05 101L30 124L30 352Z"
          fill="#F7D527"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.4,
            delay: 0.2,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        />
        <motion.path
          className={styles.cyberFrameBorders}
          d="M438 467L457 497L306 497L326.5 467L438 467Z"
          fill="#F7D527"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.4,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        />
        <motion.path
          className={styles.cyberFrameBorders}
          d="M721 289L736.5 271.5V489H517L548.5 473.5H721V289Z"
          fill="#F7D527"
          initial={{ opacity: 0, x: 10, y: 10 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.6,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        />
      </motion.svg>
    </div>
  );
}
