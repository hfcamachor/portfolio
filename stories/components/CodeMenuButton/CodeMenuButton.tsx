import clsx from "clsx";
import styles from "./codeMenuButton.module.scss";

interface CodeMenuButtonProps {
  /**
   * Button contents
   */
  label: string;
  /**
   * Sets the button state if active
   */
  active?: boolean;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

export function CodeMenuButton({
  label,
  active,
  onClick,
}: CodeMenuButtonProps) {
  return (
    <button
      className={clsx(
        styles.codeMenuButton,
        active && styles.codeMenuButtonActive
      )}
      onClick={onClick}
    >
      <span className={styles.codeMenuButtonIcon}>&lt;&gt;</span>
      {label}
    </button>
  );
}
