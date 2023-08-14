import React from "react";
import styles from "./icon.module.css";
import { UserProfileIcon, SettingsIcon, HomeIcon, MessageIcon } from "../Icons";

export enum EIcons {
  user,
  settings,
  home,
  messages
}
type TSizes = 100 | 20 | 16 | 14 | 12 | 10;

interface IconProps {
  name: EIcons;
  size?: TSizes;
}

export function Icon({ name, size }: IconProps) {
  let iconComponent: React.ReactNode;

  switch (name) {
    case EIcons.user:
      iconComponent = <UserProfileIcon />;
      break;
    case EIcons.settings:
      iconComponent = <SettingsIcon />;
      break;
    case EIcons.home:
      iconComponent = <HomeIcon />;
      break;
    case EIcons.messages:
    iconComponent = <MessageIcon />;
      break;
    default:
      iconComponent = null;
  }

  return <div className={styles[`s${size}`]}>{iconComponent}</div>;
}
