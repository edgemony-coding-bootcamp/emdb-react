import styles from "./style.module.scss";

const Card = (props) => {
  return <div className={styles.card}>{props.children}</div>;
};

export { Card };
