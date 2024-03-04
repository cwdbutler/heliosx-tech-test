import styles from "./header.module.css";

interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps) => {
  return <h1 className={styles.header}>{title}</h1>;
};

export { Header };
