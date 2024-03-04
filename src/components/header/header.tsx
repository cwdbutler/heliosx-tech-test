import { ReactNode } from "react";
import styles from "./header.module.css";

interface HeaderProps {
  children: ReactNode;
}

const Header = ({ children }: HeaderProps) => {
  return (
    <div className={styles.header}>
      <img src="./logo.png" alt="Dermatica logo" />
      <h1>{children}</h1>
    </div>
  );
};

export { Header };
