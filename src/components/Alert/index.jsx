import { useEffect } from "react";

import styles from "./style.module.scss";

export const Alert = (props) => {
  const visible = props.visible || false;
  const content = props.content || "Testo da visualizzare";
  const timeout = props.timeout || 3000;
  const danger = props.danger || false;

  const classes = [
    styles.alert,
    visible ? styles.visible : "",
    danger ? styles.red : "",
  ];

  useEffect(() => {
    if (visible === true) {
      setTimeout(() => props.timeoutCallback(), timeout);
    }

    // eslint-disable-next-line
  }, [visible]);

  return (
    <div className={classes.join(" ")}>
      <p>{content}</p>
    </div>
  );
};
