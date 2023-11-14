"use client";

import styles from "./titleBoxShape.module.scss";
import clsx from "clsx";
import { motion } from "framer-motion";

export interface TitleBoxShapeProps {
  /**
   * Custom Class
   */
  className?: string;
  /**
   * title first part
   */
  title: string;
  /**
   * Set the component position to right
   */
  alignRight?: boolean;
  /**
   * Color of the frame
   */
  color?: "red" | "yellow" | "blue";
}

export function TitleBoxShape({ className, title, alignRight, color }: TitleBoxShapeProps) {
  return (
    <motion.div
      className={clsx(styles.TitleBoxShapeContainer, className)}
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 1,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <h1
        className={clsx(
          styles.TitleBoxShape,
          alignRight ? styles.TitleBoxShapeRight : styles.TitleBoxShapeLeft,
          styles[`TitleBoxShape${color}`]
        )}
      >
        {title}
      </h1>
    </motion.div>
  );
}
