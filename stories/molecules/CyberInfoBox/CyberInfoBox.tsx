import clsx from "clsx";
import styles from "./cyberInfoBox.module.scss";
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

export function CyberInfoBox({ photoImage, alt }: HeaderButtonProps) {
  return (
    <div className={styles.CyberInfoBox}>
      <PhotoFrame className={clsx(styles.shape)} color="red" />
      <div className={styles.CyberInfoBoxImageContainer}>
        <Image
          className={styles.CyberInfoBoxImage}
          width={500}
          height={500}
          src={photoImage}
          alt={alt}
        />
      </div>
    </div>
  );
}
