import { useEffect, useRef, useState } from "react";
import { Button } from "../button";
import { TextInput, TextInputField } from "../text-input";
import styles from "./form.module.css";

interface FormProps {
  name: string;
  title: string;
  subtitle?: string;
  fields: TextInputField[];
  submitButtonText: string;
  completedText: string;
}

const Form = ({
  name,
  title,
  subtitle,
  fields,
  submitButtonText,
  completedText,
}: FormProps) => {
  const [values, setValues] = useState<Record<string, string>>();
  const [fieldIndex, setFieldIndex] = useState(0);
  const [activeField, setActiveField] = useState(fields[0]);
  const [isLastField, setIsLastField] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const goForward = () => {
    setFieldIndex(fieldIndex + 1);
  };

  const goBack = () => {
    setFieldIndex(fieldIndex - 1);
    if (isLastField) {
      setIsLastField(false);
    }
  };

  useEffect(() => {
    setActiveField(fields[fieldIndex]);
    if (fieldIndex === fields.length - 1) {
      setIsLastField(true);
    }
  }, [fieldIndex, fields]);

  useEffect(() => {
    // when the form changes fields, focus on the input so the screenreader will read the label
    inputRef?.current?.focus();
  }, [activeField]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setValues((values) => ({ ...values, [name]: value }));
  };

  return !isComplete ? (
    <form
      title={name}
      name={name}
      onSubmit={(event) => {
        event?.preventDefault();
        // eslint-disable-next-line no-console
        console.log(values);
        setIsComplete(true);
      }}
      className={styles.form}
    >
      <div className={styles.main}>
        <h3>{title}</h3>
        {subtitle && <p>{subtitle}</p>}
        <TextInput
          ref={inputRef}
          key={activeField.id}
          {...activeField}
          defaultValue={values && values[activeField.name]}
          onChange={handleChange}
        />
      </div>
      <div className={styles.footer}>
        {fieldIndex > 0 && (
          <Button type="button" onClick={goBack}>
            Back
          </Button>
        )}
        {isLastField ? (
          <Button type="submit">{submitButtonText}</Button>
        ) : (
          <Button type="button" onClick={goForward}>
            Next
          </Button>
        )}
      </div>
    </form>
  ) : (
    <p>{completedText}</p>
  );
};

export { Form };
