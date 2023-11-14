import clsx from "clsx";
import styles from "./cyberButton.module.scss";

export interface CyberButtonProps {
  /**
   * Button contents
   */
  label: string;
  /**
   * Sets color of the label
   */
  color?: "black" | "white";
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

export function CyberButton({
  label,
  onClick,
  color = "black",
}: CyberButtonProps) {
  return (
    <button
      className={clsx(styles.CyberButton, styles[`CyberButton${color}`])}
      onClick={onClick}
    >
      <div className={styles.CyberButtonSquareShape}>
        <div className={styles.CyberButtonSquareShapeInner}></div>
      </div>
      <div className={clsx(styles.CyberButtonSquareShape, styles.CyberButtonSquareShapeRight)}>
        <div className={styles.CyberButtonSquareShapeInner}></div>
      </div>
      <div className={clsx(styles.CyberButtonTriangleShape)}>
        <div className={styles.CyberButtonTriangleShapeInner}></div>
      </div>
      <div className={clsx(styles.CyberButtonTriangleShape, styles.CyberButtonTriangleShapeRight)}>
        <div className={styles.CyberButtonTriangleShapeInner}></div>
      </div>
      <div className={styles.CyberButtonContainer}>{label}</div>
    </button>
  );
}
