import clsx from "clsx";
import styles from "./separator.module.scss";

export interface SeparatorProps {
  /**
   * Custom Class
   */
  className?: string;
  /**
   * Color of the frame
   */
  color?: "blue" | "pink";
}

export function Separator({ className, color = "blue" }: SeparatorProps) {
  return (
    <div className={clsx(styles.separator, className)}>
      <svg
        className={styles.separatorSvg}
        width="100%"
        height="100%"
        viewBox="0 0 283 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0.5 13V0H283L256 13H0.5Z" fill="#DC4943" />
      </svg>
    </div>
  );
}
