import { ReactNode } from "react";
import styles from "./footer.module.css";

export interface FooterProps {
  children: ReactNode;
}

const Footer = ({ children }: FooterProps) => {
  return <footer className={styles.footer}>{children}</footer>;
};

export { Footer };
