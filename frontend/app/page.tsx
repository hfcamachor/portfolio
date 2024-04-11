"use client";

import styles from "./page.module.scss";
import { PortfolioHome } from "./sections/home/PortfolioHome";
import { PortfolioAbout } from "./sections/about/PortfolioAbout";
import "./page.module.scss";
import { ColorPicker } from "@/stories/components/AnimatedCircle/ColorPicker";
import clsx from "clsx";
import { useState } from "react";
import { useGlobalState } from "./utils/globalContext";

export default function Home() {
  const { globalState, setGlobalState } = useGlobalState();

  const onSelect = (color: string) => {
    const globalStateObj = {
      ...globalState,
      themeColor: color
    }
    setGlobalState(globalStateObj);
  };
console.log("globalState", globalState)
  return (
    <main>
      <div className={clsx(styles.main, styles[`homePage${globalState.themeColor}`])}>
        <ColorPicker onSelect={onSelect} customClassName={styles.colorPicker}/>
        <PortfolioHome />
        <PortfolioAbout />
      </div>
    </main>
  );
}
