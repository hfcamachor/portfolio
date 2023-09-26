import React from "react";
import styles from "./animated-button.module.scss";
import clsx from "clsx";
import { Box } from "@mui/material";

interface ButtonProps {
  /**
   * Button contents
   */
  label: string;
  /**
   * Color of the front animated shape
   */
  colorShapeFront?: string;
  /**
   * Color of the back animated shape
   */
  colorShapeBack?: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const AnimatedButton = ({ label, colorShapeFront = "rgba(255, 6, 6, 0.81)", colorShapeBack = "rgba(0, 255, 255, 0.614)", onClick }: ButtonProps) => {
  return (
    <button className={styles.animatedButton} onClick={onClick}>
      <div className={styles.animatedButtonShapes}>
        <Box
          sx={{
            backgroundColor: colorShapeBack,
          }}
          className={clsx(
            styles.animatedButtonShapeOne,
            styles.animatedButtonShapeTwo
          )}
        ></Box>
        <Box
          sx={{
            backgroundColor: colorShapeFront,
          }}
          className={styles.animatedButtonShapeOne}
        ></Box>
      </div>
      <span className={styles.animatedButtonLabel}>{label}</span>
    </button>
  );
};
