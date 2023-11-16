"use client";

import styles from "./textBoxIntro.module.scss";
import clsx from "clsx";
import { motion } from "framer-motion";

export interface TextBoxIntroProps {
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
  /**
   * Sets the tag og the title
   */
  level: number;
}

export function TextBoxIntro({
  className,
  title,
  titleTwo,
  small,
  right,
  color,
  level
}: TextBoxIntroProps) {
  const HeadingTag = `h${level}`;

  return (
    <div
      className={clsx(
        styles.TextBoxIntroContainer,
        styles[`TextBoxIntro${color}`],
        small ? styles.TextBoxIntroSmall : styles.TextBoxIntroBig,
        right ? styles.TextBoxIntroRight : styles.CyberTitleLeft,
        className
      )}
    >
      <HeadingTag className={styles.CyberTitle}>
        <span className={clsx(styles.CyberTitleName, styles.CyberTitleNameOne)}>
          {title}
        </span>
        {titleTwo && !small && (
          <span className={styles.CyberTitleNameTwo}>{titleTwo}</span>
        )}
      </HeadingTag>
    </div>
  );
}
