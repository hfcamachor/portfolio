"use client";

import * as React from "react";
import { motion } from "framer-motion";
import styles from "./animatedCircle.module.scss";
import Image from "next/image";

export interface AnimatedCircleProps {
  /**
   * Url or path of the image
   */
  image?: string;
  /**
   * Alt text of the image
   */
  alt?: string;
  /**
   * Color of the shape
   */
  color?: string;
}

export function AnimatedCircle({ image, color, alt }: AnimatedCircleProps) {
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: () => {
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { delay: 0.2, type: "spring", duration: 1.5, bounce: 0 },
          opacity: { delay: 0.2, duration: 0.01 },
        },
      };
    },
  };

  const parentContainerWidth = 600;
  const circleRadius = parentContainerWidth * 0.4;

  return (
    <div className={styles.animatedCircleContainer}>
      <div className={styles.animatedCircle}>
        <motion.svg
          className={styles.motionSvg}
          viewBox={`0 0 ${parentContainerWidth} ${parentContainerWidth}`}
          initial="hidden"
          animate="visible"
        >
          <motion.circle
            className={styles.circle}
            cx={parentContainerWidth / 2}
            cy={parentContainerWidth / 2}
            r={circleRadius}
            variants={draw}
          />
        </motion.svg>
      </div>
      {image && (
        <div className={styles.animatedCircleImageContainer}>
          <motion.div
            initial={{ scale: 0.5, rotate: 100, opacity: 0 }}
            animate={{ scale: 1, rotate: 0, opacity: 1 }}
            className={styles.animatedCircleImage}
            transition={{
              type: "easeIn",
              duration: 0.4,
              delay: 0.7,
            }}
          >
            <Image
              className={styles.animatedCircleImg}
              fill
              src={image}
              alt={alt || ""}
              objectFit="cover"
            />
          </motion.div>
        </div>
      )}
    </div>
  );
}
