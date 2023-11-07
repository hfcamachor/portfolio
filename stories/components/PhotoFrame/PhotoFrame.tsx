import styles from "./photoFrame.module.scss";

export interface PhotoFrameProps {
  /**
   * Custom Class
   */
  className?: string;
  /**
   * Color of the frame
   */
  color?: 'blue' | 'pink';
}

export function PhotoFrame({ className, color = 'blue' }: PhotoFrameProps) {
  return (
    <div className={className}>
      <svg
        className={styles[`PhotoFrame${color}`]}
        width="100%"
        height="100%"
        viewBox="0 0 390 525"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M80.5373 7.61206H77.6257L75.573 9.67694L9.99087 75.6471L7.9552 77.6948V80.5822V509V516H14.9552H301.343H304.276L306.333 513.909L376.96 442.118L378.97 440.075V437.209V14.6121V7.61206H371.97H80.5373Z"
          stroke-width="5"
        />
      </svg>
    </div>
  );
}
