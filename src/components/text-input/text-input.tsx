import styles from "./text-input.module.css";

interface TextInputProps {
  name: string;
  id: string;
  label?: string;
}

const TextInput = ({
  children,
  name,
  id,
  label,
  ...rest
}: TextInputProps & Omit<React.ComponentPropsWithRef<"input">, "className">) =>
  // allows for standard input props to be passed but prevents style from being overriden

  label ? (
    <div className={styles.component}>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      <input {...rest} className={styles.input} name={name} id={id} />
    </div>
  ) : (
    <input {...rest} className={styles.input} name={name} id={id} />
  );

export { TextInput };
