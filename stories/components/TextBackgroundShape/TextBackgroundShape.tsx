import { Typography, TypographyProps } from "@mui/material";
import clsx from "clsx";
import styles from "./textBackgroundShape.module.scss";

interface TextBackgroundShapeProps {
  label: string;
  variant?: TypographyProps["variant"];
  className?: string;
  shapeReverted?: boolean;
  type?: "black" | "red" | "white" | "cyan"
}

export const TextBackgroundShape = ({
  label,
  variant,
  className,
  shapeReverted,
  type
}: TextBackgroundShapeProps) => {
  return (
    <div className={clsx(styles.textWithShape, type && styles[type])}>
      <div className={clsx(styles.shape, shapeReverted && styles.shapeReverted)}></div>
      <Typography className={className} sx={{ position: "relative" }} variant={variant}>
        {label}
      </Typography>
    </div>
  );
};
