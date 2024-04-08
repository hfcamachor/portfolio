"use client";

import * as React from "react";
import styles from "./colorPicker.module.scss";
import clsx from "clsx";

export interface ColorPickerProps {
  /**
   * Callback function invoked when a color is selected.
   */
  onSelect: (color: string) => void;
}

export function ColorPicker({ onSelect }: ColorPickerProps) {
  const colorClasses = ["Yellow", "Green", "Red", "White"];

  return (
    <div className={styles.colorPicker}>
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
