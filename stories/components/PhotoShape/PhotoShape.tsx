import clsx from "clsx";
import styles from "./photoShape.module.scss";
import Image from "next/image";
import { PhotoFrame } from "../PhotoFrame/PhotoFrame";

export interface HeaderButtonProps {
  /**
   * Url of the photo image
   */
  photoImage: string;
  /**
   * Alt of the image
   */
  alt: string;
}

export function PhotoShape({ photoImage, alt }: HeaderButtonProps) {
  return (
    <div className={styles.photoShape}>
      <PhotoFrame className={clsx(styles.shape)} color="pink" />
      <div className={styles.photoShapeImageContainer}>
        <Image
          className={styles.photoShapeImage}
          width={500}
          height={500}
          src={photoImage}
          alt={alt}
        />
      </div>
    </div>
  );
}
