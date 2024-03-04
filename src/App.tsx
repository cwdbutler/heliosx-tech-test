import styles from "./App.module.css";
import { Header } from "./components/header";
import { Form } from "./components/form";
import { Footer } from "./components/footer";
import { LinkList } from "./components/link-list";

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
      <Footer>
        <LinkList
          title="Useful Links"
          links={[
            {
              text: "Support centre",
              url: "https://support.dermatica.co.uk/hc/en-gb",
            },
            { text: "Blog", url: "https://www.dermatica.co.uk/skinlab" },
          ]}
        />
        <LinkList
          title="Contact Us"
          links={[
            {
              text: "Send us a message",
              url: "https://www.dermatica.co.uk/#:~:text=Contact%20Us-,Send%20us%20a%20message,-Get%20the%20latest",
            },
          ]}
        />
        <LinkList
          title="My Links"
          links={[
            { text: "GitHub", url: "https://github.com/cwdbutler" },
            { text: "Website", url: "https://conor.tech" },
          ]}
        />
      </Footer>
    </>
  );
}

export default App;
