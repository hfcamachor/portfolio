"use client";

import styles from "./page.module.scss";
import { PortfolioHome } from "./sections/home/PortfolioHome";
import { PortfolioAbout } from "./sections/about/PortfolioAbout";
import "./page.module.scss";
import { ColorPicker } from "@/stories/components/AnimatedCircle/ColorPicker";
import clsx from "clsx";
import { useState } from "react";

export default function Home() {
  const [color, setColor] = useState("");
  const onSelect = (color: string) => {
    setColor(color);
  };

  return (
    <main>
      <div className={clsx(styles.main, styles[`homePage${color}`])}>
        <ColorPicker onSelect={onSelect} />
        <PortfolioHome />
        <PortfolioAbout />
      </div>
    </main>
  );
}
