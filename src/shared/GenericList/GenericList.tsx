import React, { FC, ReactNode } from "react";
import styles from "./genericlist.module.css";

interface IGenericListProps {
  items: React.ReactNode[];
}

export function MyList({ items }: IGenericListProps) {
  return (
    <ul>
      {items.map((item) => (
        <li>{item}</li>
      ))}
    </ul>
  );
}
