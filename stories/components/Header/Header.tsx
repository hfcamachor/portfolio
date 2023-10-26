"use client";

import * as React from "react";
import "./toolbar-override.scss";

type NavItems = {
  label: string;
  onClick?: () => void;
};

interface Props {
  navItems: NavItems[];
}


export function Header() {

  return (
    <header>
      Header
    </header>
  );
}
