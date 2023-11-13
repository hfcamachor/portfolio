"use client";

import styles from "./cyberTitle.module.scss";
import clsx from "clsx";
import { motion } from "framer-motion";

export interface CyberTitleProps {
  /**
   * Custom Class
   */
  className?: string;
  /**
   * title first part
   */
  title: string;
  /**
   * title second part
   */
  titleTwo: string;
}

export function CyberTitle({ className, title, titleTwo }: CyberTitleProps) {
  return (
    <motion.div
      className={clsx(styles.CyberTitleContainer, className)}
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 1,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <h1 className={styles.CyberTitle}>
        <span className={styles.CyberTitleName}>{title}</span>
        <span className={styles.CyberTitleNameTwo}>{titleTwo}</span>
      </h1>
    </motion.div>
  );
}
