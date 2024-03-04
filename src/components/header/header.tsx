import { ReactNode } from "react";
import styles from "./header.module.css";

interface HeaderProps {
  children: ReactNode;
}

const Header = ({ children }: HeaderProps) => {
  return <h1 className={styles.header}>{children}</h1>;
};

export { Header };
