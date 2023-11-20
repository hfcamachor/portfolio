import clsx from "clsx";
import styles from "./loader.module.scss";

export interface LoaderProps {
  /**
   * Custom Class
   */
  className?: string;
  /**
   * Color of the frame
   */
  color?: "blue" | "pink";
}

export function Loader({ className, color = "blue" }: LoaderProps) {
  return (
    <div className={styles.ldsEllipsis}><div></div><div></div><div></div><div></div></div>
  );
}
