import styles from "./shapeParagraph.module.scss";
import { ReactNode } from "react";

interface ShapeParagraphProps {
  children: ReactNode;
}

export const ShapeParagraph = ({ children }: ShapeParagraphProps) => {
  return (
    <div className={styles.ShapeParagraph}>
      <div className={styles.ShapeOne}></div>
      <div className={styles.ShapeTwo}></div>
      <div className={styles.innerText}>
        {children}
      </div>
    </div>
  );
};
