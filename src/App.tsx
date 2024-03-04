import styles from "./App.module.css";
import { Header } from "./components/header";
import { Form } from "./components/form";

function App() {
  return (
    <>
      <Header>Dermatica</Header>
      <main className={styles.main}>
        <div className={styles.form}>
          <Form
            title="Consultation form"
            name="Consultation form"
            subtitle="Answer a few quick and easy questions from our pharmacists"
            fields={[
              {
                id: "field 1",
                name: "field 1",
                label: "field 1",
                placeholder: "type something",
              },
              {
                id: "field 2",
                name: "field 2",
                label: "field 2",
                maxLength: 5,
              },
              { id: "field 3", name: "field 3", label: "field 3" },
            ]}
            submitButtonText="Submit"
            completedText="Thank you for completing the consultation. We will be in touch shortly."
          />
        </div>
      </main>
    </>
  );
}

export default App;
