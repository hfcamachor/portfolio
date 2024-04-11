"use client";

import * as React from "react";
import styles from "./colorPicker.module.scss";
import clsx from "clsx";

export interface ColorPickerProps {
  /**
   * Callback function invoked when a color is selected.
   */
  onSelect: (color: string) => void;
  customClassName: string;
}

export function ColorPicker({ onSelect, customClassName }: ColorPickerProps) {
  const colorClasses = ["Yellow", "Green", "Red", "White"];

  return (
    <div className={clsx(styles.colorPicker, customClassName)}>
      {colorClasses.map((color, index) => (
        <button
          key={index}
          className={clsx(
            styles[`colorPicker${color}`],
            styles.colorPickerButtons
          )}
          onClick={() => onSelect(color)}
        ></button>
      ))}
    </div>
  );
}
