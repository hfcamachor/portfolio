"use client";

import clsx from "clsx";
import styles from "./cyberFrame.module.scss";
import React from "react";
import { motion } from "framer-motion";

export interface CyberFrameProps {
  /**
   * Custom Class
   */
  className?: string;
  /**
   * Color of the frame
   */
  color?: "blue" | "red";
  /**
   * Color of the frame
   */
  children: React.ReactNode;
}

export function CyberFrame({
  className,
  color = "red",
  children,
}: CyberFrameProps) {
  return (
    <div
      className={clsx(
        className,
        styles.cyberFrame,
        styles[`cyberFrame${color}`]
      )}
    >
      <motion.svg
        width="100%"
        height="100%"
        viewBox="0 0 741 495"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M43.5 112.884V362.072L15 391.325V455.789L56 491H297L320.5 455.789H446L466 491H737V39.2113H563L527 4H15V87.9655L43.5 112.884Z"
          fill="#23100D"
          fill-opacity="0.6"
          stroke="#DC4943"
          stroke-width="7"
          className={styles.cyberFrameMain}
        />
        <motion.path
          className={styles.cyberFrameBorders}
          d="M30 354L0 388L-1.24577e-05 103L30 126L30 354Z"
          fill="#DC4943"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.5,
            delay: .5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        />
        <motion.path
          className={styles.cyberFrameBorders}
          d="M60.5 476L26.5 446H311.5L288.5 476H60.5Z"
          fill="#DC4943"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: .7,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        />
        <motion.path
          className={styles.cyberFrameBorders}
          d="M721 293L736.5 275.5V493H517L548.5 477.5H721V293Z"
          fill="#DC4943"
          initial={{ opacity: 0, x: 10, y: 10 }}
          animate={{ opacity: 1, x: 0, y: 0}}
          transition={{
            duration: 0.5,
            delay: .9,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        />
      </motion.svg>
      <div className={styles.CyberFrameContent}>{children}</div>
    </div>
  );
}
