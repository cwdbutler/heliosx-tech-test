import styles from "./link-list.module.css";

interface LinkListProps {
  title: string;
  links: {
    text: string;
    url: string;
  }[];
}

const LinkList = ({ title, links }: LinkListProps) => {
  return (
    <ul className={styles.component} aria-labelledby="list-title">
      <h4 id="list-title">{title}</h4>
      {links.map(({ text, url }) => (
        <li key={text}>
          <a href={url}>{text}</a>
        </li>
      ))}
    </ul>
  );
};

export { LinkList };
