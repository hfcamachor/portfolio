import clsx from "clsx";
import React from "react";
import styles from './textBox.module.scss'

export interface TextBoxProps {
  /**
   * Custom Class
   */
  className?: string;
  /**
   * Children content
   */
  children?: React.ReactNode;
}

export function TextBox({ className, children }: TextBoxProps) {
  return (
    <div className={clsx(styles.textBox, className)}>
      {children}
    </div>
  );
}
