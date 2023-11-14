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
  titleTwo?: string;
  /**
   * Render small version of the component
   */
  small?: boolean;
  /**
   * Align component to right
   */
  right?: boolean;
  /**
   * Color of the box (Yellow is default)
   */
  color?: "red" | "yellow";
}

export function CyberTitle({
  className,
  title,
  titleTwo,
  small,
  right,
  color,
}: CyberTitleProps) {
  return (
    <div
      className={clsx(
        styles.CyberTitleContainer,
        styles[`CyberTitle${color}`],
        small ? styles.CyberTitleSmall : styles.CyberTitleBig,
        right ? styles.CyberTitleRight : styles.CyberTitleLeft,
        className
      )}
    >
      <h1 className={styles.CyberTitle}>
        <span className={clsx(styles.CyberTitleName, styles.CyberTitleNameOne)}>
          {title}
        </span>
        {titleTwo && !small && (
          <span className={styles.CyberTitleNameTwo}>{titleTwo}</span>
        )}
      </h1>
    </div>
  );
}
