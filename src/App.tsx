import styles from "./App.module.css";
import { Header } from "./components/header";
import { Form } from "./components/form";
import { Footer } from "./components/footer";
import { LinkList } from "./components/link-list";

function App() {
  return (
    <div className={styles.layout}>
      <Header>Dermatica</Header>
      <main className={styles.main}>
        <div className={styles.form}>
          <Form
            title="Consultation form"
            name="Consultation form"
            subtitle="Answer a few quick and easy questions from our pharmacists."
            fields={[
              {
                id: "name",
                name: "name",
                label: "Legal name",
                placeholder: "Tony Soprano",
                maxLength: 50,
              },
              {
                label: "Do you have Asthma?",
                name: "asthma",
                options: [
                  {
                    value: "true",
                    id: "asthma-yes",
                    label: "Yes",
                  },
                  {
                    value: "false",
                    id: "asthma-no",
                    label: "No",
                  },
                ],
              },

              {
                label: "Have you sneezed in the last 48 hours?",
                name: "recent-sneezer",
                options: [
                  {
                    value: "true",
                    id: "sneeze-yes",
                    label: "Yes",
                  },
                  {
                    value: "false",
                    id: "sneeze-no",
                    label: "No",
                  },
                ],
              },
              {
                label: "Are you human?",
                name: "human",
                options: [
                  {
                    value: "true",
                    id: "human-yes",
                    label: "Yes",
                  },
                  {
                    value: "false",
                    id: "human-no",
                    label: "No",
                  },
                  {
                    value: "maybe",
                    id: "human-maybe",
                    label: "Maybe",
                  },
                ],
              },
              {
                id: "email",
                name: "email",
                label: "Please enter your email",
                maxLength: 50,
                type: "email",
              },
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
    </div>
  );
}

export default App;
