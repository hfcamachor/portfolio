"use client";

import clsx from "clsx";
import styles from "./cyberInfoFrame.module.scss";
import React from "react";
import { TitleBoxShape } from "../TitleBoxShape/TitleBoxShape";

export interface CyberInfoFrameProps {
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

export function CyberInfoFrame({
  className,
  color = "red",
  children,
}: CyberInfoFrameProps) {
  return (
    <div
      className={clsx(
        className,
        styles.CyberInfoFrame,
        styles[`CyberInfoFrame${color}`]
      )}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 489 547"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3 544V3H440.5L474.5 33V198L453.5 213V389L474.5 405V544H382L352 512.5H137.5L100 544H3Z"
          stroke="#DC4943"
          stroke-width="6"
        />
        <path d="M465 222L489 204.5V398L465 380V222Z" fill="#DC4943" />
        <path
          d="M461.5 66.5H19.5V533H93.5L130.5 501H357.5L392.5 533H461.5V421L435.414 403.208V205.746L461.5 184V66.5Z"
          fill="#DC4943"
          fill-opacity="0.1"
        />
      </svg>

      <div className={styles.CyberInfoFrameContent}>
        <TitleBoxShape title="Example" />
        {children}</div>
    </div>
  );
}
