import styles from "./cyberTitle.module.scss";
import clsx from "clsx";

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
  /**
   * Color of the frame
   */
  color?: "blue" | "pink";
}

export function CyberTitle({ className, title, titleTwo }: CyberTitleProps) {
  return (
    <div className={clsx(styles.CyberTitleContainer, className)}>
      <h1 className={styles.CyberTitle}>
        <span className={styles.CyberTitleName}>{title}</span>
        <span className={styles.CyberTitleNameTwo}>{titleTwo}</span>
      </h1>
    </div>
  );
}
