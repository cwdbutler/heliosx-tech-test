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
  Omit<React.ComponentPropsWithRef<"fieldset">, "className" | "onChange"> & {
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  };
// allows for standard fieldset props to be passed but prevents style from being overriden

const RadioInput = forwardRef(
  (
    {
      name,
      label,
      options,
      defaultValue,
      onChange,
      ...componentProps
    }: RadioInputField,
    ref?: React.ComponentPropsWithRef<"input">["ref"]
  ) => {
    return (
      <fieldset {...componentProps} className={styles.component}>
        <legend className={styles.legend}>{label}</legend>
        {options.map(({ label, value, id, ...inputProps }) => {
          const isPreChecked = defaultValue === value;
          return (
            <label
              className={cx(styles.label, {
                [styles.checked]: isPreChecked,
              })}
              htmlFor={id}
              key={label}
            >
              <input
                {...inputProps}
                key={id}
                id={id}
                className={styles.input}
                type="radio"
                name={name}
                value={value.toString()}
                defaultChecked={isPreChecked}
                ref={(isPreChecked && ref) || undefined}
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
