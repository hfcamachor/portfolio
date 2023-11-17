import clsx from "clsx";
import styles from "./photoFrame.module.scss";

export interface PhotoFrameProps {
  /**
   * Custom Class
   */
  className?: string;
  /**
   * Color of the frame
   */
  color?: "red" | "blue" | "yellow";
}

export function PhotoFrame({ className, color }: PhotoFrameProps) {
  return (
    <div className={ clsx(className, styles.PhotoFrame)}>
      <svg
        className={styles[`PhotoFrame${color}`]}
        width="100%"
        height="100%"
        viewBox="0 0 500 456"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M275.5 456L267 443.475H375.507L420.507 366.475L424.5 380L382.5 456H275.5Z"
          fill="#DC4943"
        />
        <path
          d="M253.507 3.00009L263.5 16.8675L127.131 16.8675L83.4891 94.6453L77.4998 77L120 3.00009L253.507 3.00009Z"
          fill="#DC4943"
        />
        <path
          d="M83.5 399L22.9103 293L25.4906 266.475L107.988 407.934L83.5 399Z"
          fill="#DC4943"
        />
        <path
          d="M356.5 5.99988L342.5 15.4999H373.5L417 91.4999L421 78.9999L379 5.99988H356.5Z"
          fill="#DC4943"
        />
        <path
          d="M418.718 92.4999L423 82.4999L426 87.9999L421.451 98.1672L418.718 92.4999Z"
          fill="#DC4943"
        />
        <path
          d="M423.215 99.9997L427.497 89.9997L429.5 93.9999L424.951 104.167L423.215 99.9997Z"
          fill="#DC4943"
        />
        <path
          d="M426.822 106L431.104 95.9998L432 98.4999L427.451 108.667L426.822 106Z"
          fill="#DC4943"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M127.887 17.9999L5.7735 229.506L127.887 441.013L372.113 441.013L494.226 229.506L372.113 17.9999L127.887 17.9999ZM375 12.9999L125 12.9999L0 229.506L125 446.013H375L500 229.506L375 12.9999Z"
          fill="#DC4943"
        />
      </svg>
    </div>
  );
}
