import { forwardRef } from "react";
import styles from "./text-input.module.css";

interface TextInputProps {
  name: string;
  id: string;
  label?: string;
}

export type TextInputField = TextInputProps &
  Omit<React.ComponentPropsWithRef<"input">, "className">;
// allows for standard input props to be passed but prevents style from being overriden

// TODO: add validation logic

const TextInput = forwardRef(
  (
    { name, id, label, ...rest }: TextInputField,
    ref?: React.ComponentPropsWithRef<"input">["ref"]
  ) =>
    label ? (
      <div className={styles.component}>
        <label className={styles.label} htmlFor={id}>
          {label}
        </label>
        <input
          {...rest}
          className={styles.input}
          name={name}
          id={id}
          ref={ref}
        />
      </div>
    ) : (
      <input {...rest} className={styles.input} name={name} id={id} ref={ref} />
    )
);

export { TextInput };
