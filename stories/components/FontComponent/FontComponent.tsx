"use client";

import * as React from "react";
import { Roboto, Orbitron } from "next/font/google";
import { NextFont } from "next/dist/compiled/@next/font";
import clsx from "clsx";

interface FontComponentProps {
  fontName: "orbitron" | "roboto";
  children: React.ReactNode;
  className?: string
}

type Fonts = {
  [key: string]: NextFont,
}

const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

const orbitron = Orbitron({
  weight: ["400", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export default function FontComponent({fontName = "roboto", children, className}: FontComponentProps) {
  const fonts: Fonts = {
    orbitron,
    roboto
  }

  return (
    <div className={clsx(fonts[fontName].className, className)}>
      {children}
    </div>
  );
}

