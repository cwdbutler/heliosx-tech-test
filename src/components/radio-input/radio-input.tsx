import { forwardRef } from "react";
import styles from "./radio-input.module.css";
import cx from "classnames";

interface RadioInputProps {
  label: string;
  name: string;
  options: {
    value: string;
    id: string;
    label: string;
  }[];
}

export type RadioInputField = RadioInputProps &
  Omit<React.ComponentPropsWithRef<"input">, "className">;
// allows for standard input props to be passed but prevents style from being overriden

const RadioInput = forwardRef(
  (
    { name, label, options, defaultValue, onChange }: RadioInputField,
    ref?: React.ComponentPropsWithRef<"input">["ref"]
  ) => {
    return (
      <fieldset className={styles.component}>
        <legend className={styles.legend}>{label}</legend>
        {options.map(({ label, value, id, ...inputProps }) => {
          const isChecked = defaultValue === value;
          return (
            <label
              className={cx(styles.label, {
                [styles.checked]: isChecked,
              })}
              htmlFor={id}
              key={label}
            >
              <input
                {...inputProps}
                id={id}
                className={styles.input}
                type="radio"
                name={name}
                value={value}
                defaultChecked={isChecked}
                ref={(isChecked && ref) || undefined}
                tabIndex={isChecked ? 0 : -1}
                onChange={onChange}
              />
              {label}
            </label>
          );
        })}
      </fieldset>
    );
  }
);

export { RadioInput };
