import clsx from "clsx";
import styles from "./cyberTextBox.module.scss";
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

export function CyberTextBox({ photoImage, alt }: HeaderButtonProps) {
  return (
    <div className={styles.CyberTextBox}>
      <PhotoFrame className={clsx(styles.shape)} color="red" />
      <div className={styles.CyberTextBoxImageContainer}>
        <Image
          className={styles.CyberTextBoxImage}
          width={500}
          height={500}
          src={photoImage}
          alt={alt}
        />
      </div>
    </div>
  );
}
