import clsx from "clsx";
import styles from "./photoShape.module.scss";
import Image from "next/image";

export interface HeaderButtonProps {
  /**
   * Url of the svg image
   */
  imageShape: string;
}

export function PhotoShape({
  imageShape = "black",
}: HeaderButtonProps) {
  return (
    <div>
      <Image
        fill
        src={imageShape}
        alt=""
        objectFit="cover"
      />
    </div>
  );
}
