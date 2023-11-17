import styles from "./photoShape.module.scss";
import Image from "next/image";
import { PhotoFrame } from "../../atoms/PhotoFrame/PhotoFrame";

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
      <PhotoFrame color="blue" />
      <div className={styles.photoShapeImageContainer}>
        <Image
          className={styles.photoShapeImage}
          fill
          src={photoImage}
          alt={alt}
        />
      </div>
    </div>
  );
}
