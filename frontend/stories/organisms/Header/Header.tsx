"use client";

import * as React from "react";
import { HeaderButton, HeaderButtonProps } from "../../atoms/HeaderButton/HeaderButton";
import styles from './header.module.scss';
import clsx from "clsx";
import { Separator } from "../../atoms/Separator/Separator";

interface HeaderProps {
  navItems: HeaderButtonProps[];
  className?: string
}


export function Header({navItems, className}: HeaderProps) {

  return (
    <header className={clsx(styles.header, className)}>
      <div className={styles.headerButtons}>
        {navItems.map((item, index) => {
          return (
            <HeaderButton key={index} label={item.label} onClick={item.onClick} active={item.active} labelColor="white" color="yellow"  />
          )
        })}
      </div>
    </header>
  );
}
