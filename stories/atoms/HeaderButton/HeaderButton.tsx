import clsx from "clsx";
import styles from "./headerButton.module.scss";

export interface HeaderButtonProps {
  /**
   * Button contents
   */
  label: string;
  /**
   * Sets the button state if active
   */
  active?: boolean;
  /**
   * Sets color of the button
   */
  color?: "yellow" | "red";
  /**
   * Sets color of the label
   */
  labelColor?: "black" | "white";
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

export function HeaderButton({
  label,
  active,
  onClick,
  labelColor,
  color,
}: HeaderButtonProps) {
  return (
    <button
      className={clsx(
        styles.headerButton,
        active && styles.headerButtonActive,
        styles[`headerButton${labelColor}`],
        styles[`headerButton${color}`]
      )}
      onClick={onClick}
    >
      <div className={styles.headerButtonShapeBack}></div>
      <div className={styles.headerButtonShape}></div>
      <div className={styles.headerButtonLabel}>{label}</div>
    </button>
  );
}
