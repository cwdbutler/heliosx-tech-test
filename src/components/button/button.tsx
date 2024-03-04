import { ReactNode } from "react";
import styles from "./button.module.css";

export interface ButtonProps {
  children: ReactNode;
}

const Button = ({
  children,
  ...rest
}: ButtonProps & Omit<React.ComponentPropsWithoutRef<"button">, "className">) =>
  // allows for standard button props to be passed but prevents style from being overriden
  {
    return (
      <button {...rest} className={styles.button}>
        {children}
      </button>
    );
  };

export { Button };
