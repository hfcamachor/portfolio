"use client";

import styles from "./titleBoxes.module.scss";
import clsx from "clsx";
import { motion } from "framer-motion";

export interface TitleBoxesProps {
  /**
   * Custom Class
   */
  className?: string;
  /**
   * title first part
   */
  title: string;
  /**
   * Color of the frame
   */
  color?: "blue" | "pink";
}

export function TitleBoxes({ className, title }: TitleBoxesProps) {
  return (
    <motion.div
      className={clsx(styles.TitleBoxesContainer, className)}
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 1,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <h1 className={styles.TitleBoxes}>{title}</h1>
    </motion.div>
  );
}
